# This creates a new RESOLVE code block with the try it now button.
module Jekyll
  module Tags
    class ResolveBlock < Liquid::Block

      # Regular expression for sanity checking if the "blockID"
      # is a valid HTML ID.
      ID_REGEX = /^[A-Za-z]+[\w\-\:\.]*$/

      # Initialize function for creating a new "resolve_block" tag.
      def initialize(tag_name, blockID, tokens)
        super
        
        # Make sure our "blockID" is valid
        if blockID.strip =~ ID_REGEX
          @block_id = Regexp.last_match(0)
        # Raise a syntax error message
        else
          raise SyntaxError, <<~MSG
            Syntax Error in tag 'resolve_block' while parsing the following id:

            #{blockID}

            Valid syntax: resolve_block <id>
          MSG
        end
      end

      # Function that will render the contents of this block tag.
      def render(context)
        # Sanitize the code inside the block
        resolve_code = super.to_s.gsub(/\A(\n|\r)+|(\n|\r)+\z/, "")

        # Invoke Rouge to format our code
        formatted_code = rouge_resolve(resolve_code)

        # Output the formatted code with the proper HTML tags
        to_html_code(formatted_code)
      end

      private

      # Create our own custom call to Rouge for formatting RESOLVE code.
      def rouge_resolve(code)
        require "rouge"
        formatter = ::Rouge::Formatters::HTMLLegacy.new(
            :line_numbers => false,
            :wrap         => false,
            :css_class    => "highlight"
        )
        lexer = Rouge::Lexers::PlainText
        formatter.format(lexer.lex(code))
      end

      # This adds the proper HTML tags to the converted code.
      # The output structure must be the same as the one outputed by 
      # the highligher tag.
      def to_html_code(code)
        blockID = @block_id

        "<figure id=\"#{@block_id}\" class=\"highlight\"><pre><code class=\"language-resolve\" data-lang=\"#resolve\">"\
        "#{code.chomp}</code></pre></figure><button type=\"button\" class=\"btn btn-primary\" onclick=\"load_lesson($('\##{@block_id}').text());\">Try it now!</button>"
      end
    end
  end
end

Liquid::Template.register_tag("resolve_block", Jekyll::Tags::ResolveBlock)