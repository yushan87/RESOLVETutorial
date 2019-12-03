# -*- coding: utf-8 -*- #
# frozen_string_literal: true

require "rouge"
require "rouge/lexer"
require "rouge/regex_lexer"

# Source: Modified from Eiffel lexer on Rouge GitHub Page
module Rouge
    module Lexers
      class ResolveLexer < RegexLexer
        title "RESOLVE"
        desc "RESOLVE Specification and Programming Language"
  
        tag 'resolve'
        filenames '*.co', '*.rb', '*.en', '*.fa', '*.mt'
        mimetypes 'text/plain'
  
        # RESOLVE Keywords
        LanguageKeywords = %w(
          abs Abstract_Var affects all alt alters and 
          Array Associative Axiom Base_Case Big_Concatenation 
          Big_Intersection Big_Product Big_Sum Big_Union 
          by Cart_Prod Case Categorical changing 
          clr clears complement Commutative Concept Confirm 
          Constraint Constraints constraint constraints 
          Convention Conventions convention conventions 
          Corollary correspondence decreasing Defines 
          Definition Def dependent div do duration 
          elapsed_time else end enhanced Enhancement 
          ensures eval evaluates exemplar exists 
          externally Facility Facility_Finalization 
          Facility_Initialization Family finalization 
          For for Forget from If if iff Implicit implies 
          is_in is_not_in is_not_proper_subset is_not_subset_of 
          is_not_substring_of is_proper_subset is_subset_of 
          is_substring_of independent Inductive (i.) (ii.) 
          initialization instantiation intersection 
          introduces involves is Iterate lambda Lemma 
          mainp_disp maintaining mod modeled modus not 
          of on op Oper Operation or otherwise perf_finalization 
          perf_initialization ponens Precis pres preserves 
          Presume Profile Proc Procedure Realization realized 
          Receptacles Record recp Recursive related rem 
          Remember rpl replaces represented requires 
          rest restores Shared short_for such that then 
          Theorem There there Type type unique union 
          upd updates uses Var Variables where which_entails 
          While without with_profile
        )

        BooleanConstants = %w(true false)

        MathematicalTypes = %w(B Z N SSet SStr)
  
        state :root do
          rule %r/[\s]+/, Text::Whitespace
          rule %r/--.*$/, Comment::Single
          rule %r/\(\*[\s\S]*?\*\)/, Comment::Multiline

          rule %r/(?:#{LanguageKeywords.join('|')})\b/, Keyword
          rule %r/(?:#{BooleanConstants.join('|')})\b/, Keyword::Constant
          rule %r/(?:#{MathematicalTypes.join('|')})\b/, Keyword::Type
  
          rule %r/::|[()\/;,:&\[\]]|[:=]|[:=:]/, Punctuation
  
          rule %r/\d(?:_*\d)*/, Num::Integer
          rule %r/"(?:[^%\b\f\n\r\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)*?"/, Str::Double
          rule %r/'(?:[^%\b\f\n\r\t\v]|%[A-DFHLNQR-V%'"()<>]|%\/(?:0[xX][\da-fA-F](?:_*[\da-fA-F])*|0[cC][0-7](?:_*[0-7])*|0[bB][01](?:_*[01])*|\d(?:_*\d)*)\/)'/, Str::Char
  
          rule %r{\*\*|//|==|/=|<=|>=|=>|[-+*/<>=%]}, Operator

          rule %r/[A-Za-z][\dA-Za-z_]*/, Name
          rule %r/\s+/, Text
        end
      end
    end
  end