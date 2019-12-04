# This creates a new RESOLVE inline code tag with highlighting.
module Jekyll
    class ResolveTag < Liquid::Tag
  
      # Initialize function for creating a new "inline_resolve" tag.
      def initialize(tag_name, text, tokens)
        super
        @text = text
      end
  
      # Function that will render the contents of this tag.
      def render(context)
        # Sanitize the code inside the block
        resolve_code = @text.gsub(/\A(\n|\r)+|(\n|\r)+\z/, "")

        # Invoke Rouge to format our code
        formatted_code = rouge_resolve(resolve_code)
  
        # Output the formatted code with the proper HTML tags
        to_html_code(formatted_code)
      end

      private
  
      # Create our own custom call to Rouge for formatting RESOLVE code.
      def rouge_resolve(code)
        require "rouge"
        formatter = ::Rouge::Formatters::HTML.new
        lexer = Rouge::Lexers::ResolveLexer
        formatter.format(lexer.lex(code))
      end

      # This adds the proper HTML tags to the converted code.
      # The output structure must be the same as the one outputed by 
      # the highligher tag.
      def to_html_code(code)
        "<span class=\"highlight inlineCode\" data-lang=\"#resolve\">"\
        "#{code.chomp}</span>"
      end
    end
  end
  
  Liquid::Template.register_tag('inline_resolve', Jekyll::ResolveTag)