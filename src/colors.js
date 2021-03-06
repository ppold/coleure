(function() {

  define(['./goodies'], function(_) {
    return {
      load: function(sources) {
        var _this = this;
        _.async(this, 'display', 2);
        _.json(sources.colors, function(colors) {
          return _this.display({
            colors: colors
          });
        });
        return _.template(sources.template, function(template) {
          return _this.display({
            template: template
          });
        });
      },
      display: function(settings) {
        var color, colors, content, template, _i, _len;
        colors = settings.colors;
        template = settings.template;
        content = '';
        for (_i = 0, _len = colors.length; _i < _len; _i++) {
          color = colors[_i];
          content += template(color);
        }
        return _.id('colors').innerHTML = content;
      }
    };
  });

}).call(this);
