widget19030621520001ptn1=function(option,exports){option('name','Component','');exports.configure=function(options,el){el.attrd('cms-info',options.name);el.find('.totaljs').html('Component: '+options.name)}};widget19030621520002ptn0=function(option,exports){option('name','View name','');exports.configure=function(options,el){el.attrd('cms-info',options.name);el.find('.totaljs').html('View: '+options.name)}};widget19030621520003ptn1=function(option,exports){option('xs','Extra small display',true);option('sm','Small display',true);option('md','Medium display',true);option('lg','Large display',true);exports.configure=function(options,el){var cls=[],info=[];if(options.xs)info.push('XS');else cls.push('hidden-xs');if(options.sm)info.push('SM');else cls.push('hidden-sm');if(options.md)info.push('MD');else cls.push('hidden-md');if(options.lg)info.push('LG');else cls.push('hidden-lg');el.find('.wc177').rclass2('hidden-').aclass(cls.join(' ')).attrd('cms-info',info.join(', '))}};widget19030621530002kuh0=function(option,exports){option('color','Color','silver',[{text:'Silver',value:'silver'},{text:'Yellow',value:'yellow'},{text:'Red',value:'red'},{text:'Blue',value:'blue'},{text:'Green',value:'green'},{text:'Black',value:'black'},{text:'White',value:'white'}]);option('fontcolor','Font colors',false);option('paddingv','Vertical padding',true);exports.configure=function(options,el){el=el.find('.wl100');el.rclass2('wl100-').aclass('wl100-'+options.color);el.tclass('wl100rounded',options.rounded);el.tclass('wl100font',options.fontcolor);el.tclass('wl100paddingv',options.paddingv)}};widget19030621530003kuh1=function(option,exports){option('size','Image size','normal',['normal','large']);exports.configure=function(options,el){el.find('img').each(function(){var w='600',h='450';if(options.size==='large'){w='1280';h='768'}$(this).attr('data-cms-width',w).attr('data-cms-height',h)})}};widget19030621530004kuh0=function(option,exports){option('color','Color','smoke',[{text:'Silver',value:'smoke'},{text:'Yellow',value:'yellow'},{text:'Red',value:'red'},{text:'Blue',value:'blue'},{text:'Green',value:'green'},{text:'Pink',value:'pink'},{text:'Orange',value:'orange'},{text:'Purple',value:'purple'},{text:'Mint',value:'mint'},{text:'Black',value:'black'},{text:'White',value:'white'}]);exports.configure=function(options,el){el.find('.wc143').rclass2('wc143-').aclass('wc143-'+options.size).aclass('wc143-'+options.color)}};widget19030621540001udu1=function(option,exports){option('color','Color','silver',[{text:'Silver',value:'silver'},{text:'Yellow',value:'yellow'},{text:'Red',value:'red'},{text:'Blue',value:'blue'},{text:'Green',value:'green'}]);option('fontcolor','Font colors',false);option('rounded','Round corners',false);option('paddingv','Vertical padding',true);exports.configure=function(options,el){el=el.find('.wc144');el.rclass2('wc144-').aclass('wc144-'+options.color);el.tclass('wc144rounded',options.rounded);el.tclass('wc144paddingv',options.paddingv);el.tclass('wc144font',options.fontcolor)}};widget19030621540003udu1=function(option,exports){option('link','Enable link',false);option('rounded','Rounded corners',false);exports.configure=function(options,el){var link=el.find('a');if(options.link){!link.length&&el.find('img').wrap('<a href="/" class="CMS_edit"></a>')}else{link.length&&el.find('img').unwrap('a')}el.find('img').tclass('img-rounded',options.rounded)}};widget19030621540004udu0=function(option,exports){option('delay','Timeout in seconds',1,'number',50,1);exports.configure=function(options,el){el.attrd('jc-config','delay:'+options.delay)}};widget19030621540007udu1=function(option,exports){option('align','Align','left',['left','center','right','justify']);exports.configure=function(options,el){var container=el.find('.wc135');switch(options.align){case'left':container.rclass2('wc135-');break;case'right':case'center':case'justify':container.rclass2('wc135-').aclass('wc135-'+options.align);break}}};widget19030621550001gly1=function(option,exports){option('color','Color','yellow',[{text:'Yellow',value:'yellow'},{text:'Red',value:'red'},{text:'Blue',value:'blue'},{text:'Green',value:'green'}]);option('fullwidth','Full width',false);exports.configure=function(options,el){el.find('blockquote').rclass2('wc121-').aclass('wc121-'+options.color);if(options.fullwidth)el.find('.col-lg-8').tclass('col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-lg-12');else el.find('.col-lg-12').tclass('col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-lg-12')}};