# This creates a new RESOLVE code block with highlighting.
module Jekyll
    module Tags
      class HighlightResolveBlock < Liquid::Block
  
        # Initialize function for creating a new "highlight_resolve_block" tag.
        def initialize(tag_name, text, tokens)
          super
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
          "<figure class=\"highlight\"><pre><code class=\"language-resolve\" data-lang=\"#resolve\">"\
          "#{code.chomp}</code></pre></figure>"
        end
      end
    end
  end
  
  Liquid::Template.register_tag("highlight_resolve_block", Jekyll::Tags::HighlightResolveBlock)