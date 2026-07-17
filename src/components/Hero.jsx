import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Sparkles, Code2, Cpu } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  
  // Parallax for floating elements
  const codeBackgroundText = `app.provider('myProvider', function(){
  var baseUrl = 'https://itunes.apple.com/search?term=';
  var _artist = '';
  var _finalUrl = '';

  //Going to set this property on the config function below
  this.thingFromConfig = '';

  var makeUrl = function(){
    _artist = _artist.split(' ').join('+');
    _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK'
    return _finalUrl;
  }

  this.$get = function($http, $q){
    return {
      callItunes: function(){
        makeUrl();
        var deferred = $q.defer();
        $http({
          method: 'JSONP',
          url: _finalUrl
        }).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject('There was an error')
        })
        return deferred.promise;
      },
      setArtist: function(artist){
        _artist = artist;
      },
      getArtist: function(){
        return _artist;
      },
      thingOnConfig: this.thingFromConfig
    }
  }
});`;

  return (
    <header className="hero-sky">
      {/* Code Background Image Effect */}
      <div className="code-bg-container">
        <div className="code-bg-scroll-wrapper">
          <pre className="code-bg-text">
            <code>
              {/* Repeating the text to allow seamless vertical scrolling */}
              {codeBackgroundText}
              {'\n\n'}
              {codeBackgroundText}
              {'\n\n'}
              {codeBackgroundText}
              {'\n\n'}
              {codeBackgroundText}
            </code>
          </pre>
          <pre className="code-bg-text delay-scroll">
            <code>
              {/* Repeating the text to allow seamless vertical scrolling */}
              {codeBackgroundText}
              {'\n\n'}
              {codeBackgroundText}
              {'\n\n'}
              {codeBackgroundText}
              {'\n\n'}
              {codeBackgroundText}
            </code>
          </pre>
        </div>
        <div className="code-bg-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-top-badges">
          <motion.div 
            className="status-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="live-dot"></span> Available for opportunities
          </motion.div>
        </div>

        <motion.p 
          className="wave-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hey, I'm <strong>Sohum</strong>
        </motion.p>
        <h1 className="hero-title">
          <motion.span 
            className="sans-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            aspiring software
          </motion.span>
          <br />
          <motion.span 
            className="script-text"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
          >
            engineer
          </motion.span>
        </h1>
      </div>
    </header>
  );
}
