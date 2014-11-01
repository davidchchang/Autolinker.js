/*global Autolinker */
/**
 * @class Autolinker.match.Hashtag
 * @extends Autolinker.match.Match
 * 
 * Represents a Hashtag match found in an input string which should be Autolinked.
 * 
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
Autolinker.match.Hashtag = Autolinker.Util.extend( Autolinker.match.Match, {
	
	/**
	 * @cfg {String} hashtagName (required)
	 * 
	 * The Hashtag name that was matched.
	 */
	

	/**
	 * Returns the type of match that this class represents.
	 * 
	 * @return {String}
	 */
	getType : function() {
		return 'hashtag';
	},
	
	
	/**
	 * Returns a string name for the type of match that this class represents.
	 * 
	 * @return {String}
	 */
	getHashtagName : function() {
		return this.hashtagName;
	},
	

	/**
	 * Returns the anchor href that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorHref : function() {
		return '#' + this.hashtagName;
	},
	
	
	/**
	 * Returns the anchor text that should be generated for the match.
	 * 
	 * @return {String}
	 */
	getAnchorText : function() {
		return '#' + this.hashtagName;
	}
	
} );