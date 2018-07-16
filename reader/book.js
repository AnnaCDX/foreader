if(typeof(zy) == 'undefined')  var zy = {};

zy.book = {
    'chapter_shenhe_ing': 0,
    'chapter_buy_status': 1,
    'fav_url': '/index.php?ca=book.fav',
    'bind': function () {

        //收藏
        $('[btn=book_fav]').on('click', function () {
            zy.book.fav(this);
        });

        //详情页作品介绍展开/收起
        var mod_desc = $('#book_desc');
        var height = mod_desc.height();
        var min_height = 54, max_height = 180;
        if (height > min_height) {
            mod_desc.css({height: min_height + 'px'}).next().show().on('click', function () {
                $(this).hide().next().show().end().prev().animate({height: (height < max_height ? max_height : height) + 'px'}, 200);
            }).next().on('click', function () {
                $(this).hide().prev().show().prev().animate({height: min_height + 'px'}, 200);//.css({height: '90px'});
            });
        }
        mod_desc.show();
        //详情页作者其他作品
        $('#mod_other_book_list s').on({'click': function () {
            var is_left = $(this).hasClass('qh_L');
            var is_right = $(this).hasClass('qh_R');
            if (is_left || is_right) {
                var ul = $('#mod_other_book_list ul');
                var width = ul.find('li:eq(0)').outerWidth(true);
                var len = ul.find('li').length;
                var page = ul.data('page') ? Number(ul.data('page')) : 1;
                if (is_left) {
                    page = page <= 1 ? 1 : page - 1;
                } else {
                    page = page >= len ? len : page + 1;
                }
                var _left = -width*(page-1);
                ul.data('page', page).css({'position': 'relative'}).animate({left: _left}, 300);
            }
        },
        'selectstart': function () { return false; }});

        //送鲜花
        $('a[btn="book_give_flowers"]').on('click', function () {
            zy.book.give_flowers(this);
        });

        //送钻石
		$('a[btn="book_give_zuanshi"], button[btn="book_give_zuanshi"]').on('click', function () {
            zy.book.give_zuanshi(this);
        });

        //评分
        $('a[btn="book_vote"]').on('click', function () {
            zy.book.vote(this);
        });

        zy.book.bind_common();
    },

    //bind 书籍页、阅读页事件
    'bind_common': function () {

        //订阅
        $('a[btn="buy_chapter"]').off('click').on('click', function () {
            var bid = $(this).data('bid');
            var cid = $(this).data('cid');
            var auto_buy = $('#btn_auto_dingyue').find('span:eq(0)').hasClass('click');
            zy.book.buy_chapter(bid, cid, auto_buy, $(this));
        });

        //自动订阅选中
        $('#btn_auto_dingyue').off('click').on('click', function () {
            $(this).find('span').toggleClass('click');
        });

        //打赏
        $('[btn="book_give_zuanshi"]').off('mouseover mouseout click').on({
            mouseover: function () {
                var img = $(this).children('img');
                if (img.attr('_src') != '') {
                    img.attr('_src', img.attr('src'))
                }
                img.attr('src', img.attr('_hsrc'));
            },
            mouseout: function () {
                var img = $(this).children('img');
                img.attr('src', img.attr('_src'));
            },
            click: function () {
                zy.book.give_zuanshi(this);
            }
        });

        //上章、下章、某章
        $('a[btn="chapter_change"]').off('click').on('click', function (e) {
            return true;
            var cid = $(this).attr('chapterid');
            $('#mod_chapter_content_loading').data('cid', cid);
            zy.book.load_chapter_content(0);
            if ($(this).attr('type') == 'normal') {
                $('a[btn="chapter_change"][type="normal"]').css('color', '#666');
                $(this).css('color', 'red');
                $('#btn_chapter_list').click();
            }
            return false;
        });
    },


    //加载章节信息
    'load_chapter_content': function (append, load) {
        if (!load && (zy.book.loading_chapter_content == 'loading'
            || (append && (zy.book.chapter_buy_status != 1 || zy.book.chapter_shenhe_ing == 1)))
        ) return false;
        zy.book.loading_chapter_content = 'loading';
        var mod_load = $('#mod_chapter_content_loading'), bid = mod_load.data('bid'), cid = mod_load.data('cid');
        if (!cid) return false;
        if (append == 1) {
            mod_load.show();
        } else {
            var layer_loading = layer.load(1, {shade: 0.5});
        }
        $.ajax({
            url: '/index.php?ca=book.content', data: {bid: bid, cid: cid}, type: 'post',
            'success': function (ret) {
                setTimeout(function () {
                    if (append != 1) {
                        layer.close(layer_loading);
                        mod_load.prevAll('.art_box').remove();
                    }
                    if (mod_load.prevAll('#chapter_' + cid).length > 0) {
                        mod_load.hide().prevAll('#chapter_' + cid).replaceWith(ret);
                    } else {
                        mod_load.hide().before(ret);
                    }
                    zy.book.bind_common();
                    $('#tool_right').show();
                    $('#btn_chapter_list').data('chapterid', cid);
                }, 1000);
            },
            'complete': function (response, status) {
                zy.book.loading_chapter_content = 'complete';
                if (status != 'success') {
                    layer.close(layer_loading);
                    layer.msg('请求失败');
                }
            }
        });
    },

    //设置上章、下章id
    'set_chapter_change_btn_href': function (pid, nid) {
        var btn_prev = $('a[btn="chapter_change"][type="prev"]');
        var btn_next = $('a[btn="chapter_change"][type="next"]');
        btn_prev.attr('chapterid', pid);
        btn_next.attr('chapterid', nid);
        if (zy.book.is_gund != 1) {
            if (!pid) btn_prev.parent('li').hide();
            else btn_prev.parent('li').show();
            if (!nid) btn_next.parent('li').hide();
            else btn_next.parent('li').show();
        }
    },

    //设置章节内容
    'set_chapter_content': function (txt) {
        $('#mod_chapter_content').html(txt).show();
        $('#mod_chapter_buy').hide();
    },

    //工具
    'tool': function (btn) {
        function tool_reset() {
            var tool_set = {};
            $('span[btn="tool"]').each(function () {
                var name = $(this).attr('name');
                var val = $(this).data('val');
                tool_set = $.extend(tool_set, JSON.parse('{"' + name + '": "' + val + '"}'));
            });
            zy.cookie.set('tool_read', JSON.stringify(tool_set));
        }
        var name = $(btn).attr('name');
        var mod = $('div[mod="tool_' + name + '"]');
        if (!mod.is(':hidden')) {
            mod.fadeOut(300);
        } else {
            mod.fadeIn(300).siblings('div[mod^="tool"]').fadeOut(300);
        }
        switch (name) {
            case 'background':
                mod.find('li').off('click').on('click', function () {
                    $(this).addClass('cur').siblings('li').removeClass('cur');
                    var index = $(this).index() + 1;
                    $(btn).data('val', index);
                    $('body').removeClass().addClass('bgcolor0' + index);
                    tool_reset();
                });
                break;
            case 'font':
            case 'screen':
                var mod_number = mod.find('.reduce').next();
                var $every_num = 1, $between_num = [12, 48];
                if (name == 'screen') {
                    $every_num = 100; $between_num = [800, 1100];
                }
                mod.find('s').off('click').on('click', function () {
                    var number = Number(mod_number.text());
                    if ($(this).hasClass('add'))            number += $every_num;
                    else if ($(this).hasClass('reduce'))    number -= $every_num;
                    else return;
                    if (number < $between_num[0] || number > $between_num[1]) return;
                    mod_number.text(number);
                    if (name == 'screen') {
                        $('.content').css('width', number + 'px');
                        $(window).resize();
                    } else {
                        $('[mod="chapter_content"]').css('font-size', number + 'px').find('p').css('font-size', number + 'px');
                    }
                    $(btn).data('val', number);
                    tool_reset();
                });
                break;
            case 'gund':
                if ($(btn).data('val') == 1) {
                    $(btn).data('val', 0);
                    mod.find('p').text(function () {
                        return $(this).text().replace('滚动', '翻页');
                    });
                } else {
                    $(btn).data('val', 1);
                    mod.find('p').text(function () {
                        return $(this).text().replace('翻页', '滚动');
                    });
                }
                tool_reset();
                window.location.reload();
                break;
        }
    },

    //阅读页初始化
    'init_read': function () {

        //目录显示、隐藏
        $('#btn_chapter_list').on('click', function (e) {
            var btn = this;
            e.stopPropagation();
            var cur_chapter_id = $(this).data('chapterid');
            var mod_chapter_list = $('#mod_chapter_list');
            if (mod_chapter_list.find('.tc_fenlei').length == 0) return false;
            mod_chapter_list.find('.flTit').off('click').on({'click': function () {
                if ($(this).find('s').hasClass('open')) {
                    $(this).find('s').removeClass('open').end().next().show();
                } else {
                    $(this).find('s').addClass('open').end().next().hide();
                }
            }}).end().find('s[btn="close_mod"]').off('click').on('click', function () {
                $(btn).click();
            });
            if (mod_chapter_list.is(':hidden')) {
                mod_chapter_list.show().find('.tc_con').css('height', $(window).height()/2);
                //需要定位到章节
                var chapter_btn = mod_chapter_list.find('a[chapterid="' + cur_chapter_id + '"]').parent();
                if (chapter_btn.parent().is(':hidden')) {
                    chapter_btn.parent().prev().click();
                }
                mod_chapter_list.children('div:eq(1)').scrollTop(0).scrollTop(function () {
                    return chapter_btn.offset().top - $(btn).offset().top - 100;// + $(btn).scrollTop();
                });
                chapter_btn.find('a').css('color', 'red');
            } else {
                mod_chapter_list.hide();
            }
            $(btn).toggleClass('click');
        });

        //目录展开、收起
        $('#mod_chapter_list').on({'click': function (e) {
            e.stopPropagation();
        }});

        //左右栏
        $('#tool_left, #tool_right').on({'selectstart': function () {
            return false;
        }});

        //工具
        $('span[btn="tool"]').on({
            mouseover: function (e) {
                if ($(this).attr('name') == 'gund') {
                    $('div[mod="tool_gund"]').fadeIn(100);
                }
            },
            mouseout: function () {
                if ($(this).attr('name') == 'gund') {
                    $('div[mod="tool_gund"]').stop(true, true).fadeOut(200);
                }
            },
            click: function (e) {
                zy.book.tool(this);
            }
        }).parent().on({'selectstart': function () {
            return false;
        }, 'click': function (e) {
            e.stopPropagation();
        }});

        //点击content
        $('.content').on('click', function (e) {
            $('div[mod^="tool"]').hide();
            !$('#mod_chapter_list').is(':hidden') && $('#btn_chapter_list').click();
        });

        //左右工具栏 位置
        $(window).on({
            'resize': function () {
                var content_width = $('.content').width();
                var window_width = $(window).width();
                var left = (window_width - content_width) / 2;
                $('#tool_left').css({
                    'left': function () {
                        return left - $(this).width() - 10;
                    }, 'top': '100px'
                }).show();
                $('#tool_right').css({
                    'left': function () {
                        return left + content_width + 10;
                    }, 'bottom': '10px'
                }).show();
            },
            'scroll': function () {
                var btn = $('#tool_right li:last');
                if ($(window).scrollTop() > 0) {
                    btn.show();
                    //滚动加载
                    zy.book.gund_load_chapter();
                } else {
                    btn.hide();
                }
            }
        }).resize();
        //返回顶部
        $('#tool_right li:last').on('click', function () {
            $('body, html').animate({scrollTop: 0}, 300);
        });

        //滚动加载内容
        $('#mod_chapter_content_loading').on('click', function () {
            zy.book.load_chapter_content(1);
        });

        //左右箭头翻页
        $(document).on('keydown', function (e) {
            if (e.keyCode == 37) {  //左
                window.location.href = $('a[btn="chapter_change"][type="prev"]').attr('href');
            } else if (e.keyCode == 39) {  //右
                window.location.href = $('a[btn="chapter_change"][type="next"]').attr('href');
            }
        });
    },

    'gund_load_chapter': function () {
        //滚动加载
        if (zy.book.is_gund == 1) {
            var stop = $(window).scrollTop();
            var height = $(window).height();
            var top = $('a[btn="book_give_zuanshi"]:last').offset().top;
            if (top < (stop + height - 180) && zy.book.loading_chapter_content != 'loading') {
                var next_cid = $('a[btn="chapter_change"][type="next"]').attr('chapterid');
                $('#mod_chapter_content_loading').data('cid', next_cid).click();
            }
        }
    },

    //送鲜花
    'give_flowers': function (btn) {
        if (!zy.layer_login.check()) return false;
        var bid = $(btn).data('bid');
        var mod = $('#mod_give_flowers');
        var flower_num = mod.find('i[mod="flower_num"]').text();
        if (flower_num <= 0) {
            layer.msg('您今天已经没有鲜花可用了');
            return false;
        }
        var html = $('<div></div>').append(mod.clone()).children().css('display', 'block').end().html();
        layer.open({type: 1, shift: 5, shade: 0.5, title: false, closeBtn: false,
            area: [mod.width() + 'px', mod.height() + 'px'],
            content: html,
            success: function (obj, index) {
                var btn = obj.find('[btn="submit_give_flowers"]:eq(0)');
                btn.data('flower_num', 0);
                //图片效果
                obj.find('img').on({
                    click: function () {
                        var index = $(this).index();
                        btn.data('flower_num', index + 1);
                    },
                    mouseover: function () {
                        $(this).attr('src', function () {
                            return $(this).attr('_rsrc');
                        }).prevAll().attr('src', function () {
                            return $(this).attr('_rsrc');
                        }).end().nextAll().attr('src', function () {
                            return $(this).attr('_src');
                        });
                    },
                    mouseout: function () {
                        var index = btn.data('flower_num');
                        obj.find('img').attr('src', function () {
                            return $(this).attr('_src');
                        }).end().find('img:eq(' + (index - 1) + ')').attr('src', function () {
                            return $(this).attr('_rsrc');
                        }).prevAll().attr('src', function () {
                            return $(this).attr('_rsrc');
                        });
                    }
                }).end().find('.off').on('click', function () { layer.close(index); });
                //提交
                btn.on('click', function () {
                    var textarea = obj.find('textarea');
                    var flower_num = $(this).data('flower_num');
                    if (flower_num == 0) {
                        layer.msg('一朵小花都不给吗？');
                        return false;
                    }
                    var txt = $.trim(textarea.val()) == '' ? textarea.attr('placeholder') : textarea.val();
                    var layer_loading = layer.load(1, {shade: 0.1});
                    $.ajax({
                        'url': '/index.php?ca=book.add_flower',
                        'data': {'bid': bid, 'flower_num': flower_num, 'txt': txt},
                        'dataType': 'json',
                        'success': function (ret) {
                            if (ret.status == 1) {
                                layer.msg('感谢您的支持');
                                if (typeof(zy.book.layer_no_close) != undefined && zy.book.layer_no_close == 1) {
                                    mod.find('i[mod="flower_num"]').text(function () {
                                        return $(this).text() - flower_num;
                                    });
                                    layer.close(index);
                                } else {
                                    window.location.reload();
                                }
                            } else {
                                layer.msg(ret.msg);
                            }
                        },
                        'complete': function (response, status) {
                            layer.close(layer_loading);
                            if (status != 'success') layer.msg('请求失败');
                        }
                    });
                });
            }
        });
    },

    //送钻石
    'give_zuanshi': function (btn) {
        if (!zy.layer_login.check()) return false;
        var bid = $(btn).data('bid');
        var mod = $('#mod_give_zuanshi');
        var html = $('<div></div>').append(mod.clone()).children().css('display', 'block').end().html();
        layer.open({type: 1, shift: 5, shade: 0.5, title: false, closeBtn: false,
            area: [mod.width() + 'px', mod.height() + 'px'],
            content: html,
            success: function (obj, index) {
                var btn = obj.find('[btn="submit_give_zuanshi"]:eq(0)');
                var input = obj.find('input[name="num"]');
                //图片效果
                obj.find('img').on({
                    click: function () {
                        var num = $(this).index() + 1;
                        obj.find('i[mod="zuanshi_jiazhi"]').html(num*btn.data('bili'))
                            .end().find('textarea').attr('placeholder', function () {
                                return $(this).data('placeholder').replace('{$num}', num);
                            });
                        input.val(num);
                    },
                    mouseover: function () {
                        $(this).attr('src', function () {
                            return $(this).attr('_rsrc');
                        }).prevAll().attr('src', function () {
                            return $(this).attr('_rsrc');
                        }).end().nextAll().attr('src', function () {
                            return $(this).attr('_src');
                        });
                    },
                    mouseout: function () {
                        var index = input.val();
                        obj.find('img').attr('src', function () {
                            return $(this).attr('_src');
                        }).end().find('img:eq(' + ((index > 5 ? 5 : index) - 1) + ')').attr('src', function () {
                            return $(this).attr('_rsrc');
                        }).prevAll().attr('src', function () {
                            return $(this).attr('_rsrc');
                        });
                    }
                }).end().find('.off').on('click', function () { layer.close(index); });
                //+-
                obj.find('.zuan_i').on('click', function () {
                    var num = input.val();
                    if ((num <= 1 && $(this).hasClass('redu')) || (num >= 100 && $(this).hasClass('add'))) return false;
                    if ($(this).hasClass('redu')) num --; else num ++;
                    input.val(num);
                    obj.find('i[mod="zuanshi_jiazhi"]').html(num*btn.data('bili'))
                        .end().find('textarea').attr('placeholder', function () {
                            return $(this).data('placeholder').replace('{$num}', num);
                        });
                    obj.find('img:eq(0)').trigger('mouseout');
                });
                //提交
                btn.on('click', function () {
                    var textarea = obj.find('textarea');
                    var num = Number(input.val());
                    if (num == 0) {
                        layer.msg('一颗钻石都不给吗？');
                        return false;
                    }
                    var txt = $.trim(textarea.val()) == '' ? textarea.attr('placeholder') : textarea.val();
                    var layer_loading = layer.load(1, {shade: 0.1});
                    $.ajax({
                        'url': '/index.php?ca=book.add_zuanshi',
                        'data': {'bid': bid, 'num': num, 'txt': txt},
                        'dataType': 'json',
                        'success': function (ret) {
                            if (ret.status == 1) {
                                layer.msg('感谢您的支持');
                                if (typeof(zy.book.layer_no_close) != undefined && zy.book.layer_no_close == 1) {
                                    layer.close(index);
                                } else {
                                    window.location.reload();
                                }
                            } else {
                                layer.msg(ret.msg);
                            }
                        },
                        'complete': function (response, status) {
                            layer.close(layer_loading);
                            if (status != 'success') layer.msg('请求失败');
                        }
                    });
                });
            }
        });
    },

    //投票
    'vote': function (btn) {
        if (!zy.layer_login.check()) return false;
        var bid = $(btn).data('bid');
        var mod = $('#mod_book_vote');
        var html = $('<div></div>').append(mod.clone()).children().css('display', 'block').end().html();
        layer.open({type: 1, shift: 5, shade: 0.5, title: false, closeBtn: false,
            area: [mod.width() + 'px', mod.height() + 'px'],
            content: html,
            success: function (obj, index) {
                var btn = obj.find('[btn="submit"]:eq(0)');
                //图片效果
                obj.find('li').on({
                    click: function () {
                        var index = $(this).index();
                        btn.data('vote', index + 1);
                    },
                    mouseover: function () {
                        var index = $(this).index();
                        $(this).parent().find('img').attr('src', function () {
                            return btn.attr('_ysrc');
                        }).end().find('li:lt(' + (index + 1) + ')').find('img').attr('src', function () {
                            return btn.attr('_src');
                        });
                    },
                    mouseout: function () {
                        var index = btn.data('vote');
                        $(this).parent().find('img').attr('src', function () {
                            return btn.attr('_ysrc');
                        }).end().find('li:lt(' + (index) + ')').find('img').attr('src', function () {
                            return btn.attr('_src');
                        });
                    }
                }).end().find('.off').on('click', function () { layer.close(index); });
                //提交
                btn.on('click', function () {
                    var vote = $(this).data('vote');
                    if (vote == 0 || vote == '0') {
                        layer.msg('请选择至少一项!');
                        return false;
                    }
                    var layer_loading = layer.load(1, {shade: 0.1});
                    $.ajax({
                        'url': '/index.php?ca=book.vote',
                        'data': {'bid': bid, 'vote': vote},
                        'dataType': 'json',
                        'success': function (ret) {
                            if (ret.status == 1) {
                                layer.msg('感谢您的支持');
                                $('#mod_book_star').html(ret.msg + '分');
                                layer.close(index);
                            } else {
                                layer.msg(ret.msg);
                            }
                        },
                        'complete': function (response, status) {
                            layer.close(layer_loading);
                            if (status != 'success') layer.msg('请求失败');
                        }
                    });
                });
            }
        });
    },

    //打赏
    'dashang': function (btn) {
        if (!zy.layer_login.check()) return false;
        var bid = $(btn).data('bid');
        var mod = $('#mod_dashang');
        var html = $('<div></div>').append(mod.clone()).children().css('display', 'block').end().html();
        layer.open({type: 1, shift: 5, shade: 0.5, title: false, closeBtn: false,
            area: [mod.width() + 'px', mod.height() + 'px'],
            content: html,
            success: function (obj, index) {
                var btn = obj.find('[btn="submit_dashang"]:eq(0)');
                obj .find('.off').on('click', function () { layer.close(index); }).end()
                    .find('.dxBtn').on('click', function () {
                        obj.find('.dxBtn').removeClass('click');
                        $(this).addClass('click');
                    }).end()
                    .find('input[name=number]').on('focus', function () {
                        $(this).prev().find('.dxBtn').click();
                    });
                //提交
                btn.on('click', function () {
                    var num = obj.find('.click');
                    var money = num.data('num');
                    if (money == 'custom') {
                        money = obj.find('input[name=number]').val();
                        if (!/^\d+$/.test(money)) {
                            layer.msg('请填写正确的金额');
                            return false;
                        }
                        if (money < 50) {
                            layer.msg('金额不能低于50个阅读币');
                            return false;
                        }
                        money = Number(money);
                    }
                    if ($(this).attr('money') < money) {
                        layer.msg('您的阅读币不足，请先进行充值');
                        return false;
                    }
                    var layer_loading = layer.load(1, {shade: 0.1});
                    $.ajax({
                        'url': '/index.php?ca=book.gift',
                        'data': {'bid': bid, 'money': money},
                        'dataType': 'json',
                        'success': function (ret) {
                            if (ret.status == 1) {
                                layer.msg('感谢您的支持');
                                if (typeof(zy.book.layer_no_close) != undefined && zy.book.layer_no_close == 1) {
                                    layer.close(index);
                                    mod.find('[btn="submit_dashang"]:eq(0)').attr('money', function () {
                                        return $(this).attr('money') - money;
                                    }).end().find('i[mod=money]').text(function () {
                                        return $(this).text() - money;
                                    });
                                } else {
                                    window.location.reload();
                                }
                            } else {
                                layer.msg(ret.msg);
                            }
                        },
                        'complete': function (response, status) {
                            layer.close(layer_loading);
                            if (status != 'success') layer.msg('请求失败');
                        }
                    });
                });
            }
        });
    }
};
