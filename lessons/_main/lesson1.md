---
title: "Lesson 1: Hello RESOLVE"
---

## Lesson 1 Hello RESOLVE !
### 1.1 Background
RESOLVE is a unique integrated programming environment that includes programming language (also called RESOLVE), built-in specification language, compiler, verifier, and prover. The programming language itself is an object-based language, with clean semantics and simple syntax which are easy to learn. You will write a program in RESOLVE, then compile it, which in fact simply translates it into Java code. The Java code is then compiled using a regular Java compiler and the files are executed the same way any Java class files are.

A very interesting and indispensable feature of RESOLVE is the built-in specification language that uses the universal language of mathematical notation. Other modern programming languages can also be specified using specification languages available today, (for example Java and JSP, C# and Spec#), but unlike most of them, RESOLVE is fully specified using its native specification language. And the fact that it uses the language of mathematical notation makes it less ambiguous to write and understand these specifications. The verifier is also an important component of the RESOLVE environment, as fully verified code significantly improves software reliability. The Software Engineering industry is very interested in software verification, but as of today RESOLVE is the only such environment. The verifier and prover are still under development, and a lot of work is still being done by researchers. If you decide you would like to contribute, there is always space for improvement.

## 1.2 A Simple Program in RESOLVE
Like many other books using the cliché program that prints out "Hello World!", the simple program below prints the "Hello RESOLVE!" statement.

{% resolve_block code1 %}
Facility Hello_Resolve;
    uses Std_Char_Str_Fac;
    
    Operation Main();
    Procedure
        Var Hello: Char_Str;
        Var Resolve: Char_Str;
        Hello := "Hello";
        Resolve := "RESOLVE";
       
        -- print "Hello RESOLVE" using two character strings
        Write(Hello);
        Write("  ");
        Write_Line(Resolve);
    end Main;
end Hello_Resolve;
{% endresolve_block %}

When we run the program the output will look like this: `Hello RESOLVE!`

## 1.3 RESOLVE Program structure
### 1.3.1 Facility
Line 1 declares a facility. This is similar to Java, where every file is in fact a class. And like Java, the facility's name should be the same as the name of the file that declares it. The file extension is **.fa**, indicates this is a facility. There are several other types of files in RESOLVE that will be discussed later, but for now you just have to remember to add **.fa** to your facility file name. So, if you created a facility called `Hello_Resolve`, then your file name should be named **Hello_Resolve.fa**. The underlying reason for this similarity to Java is that RESOLVE code gets translated to Java, and Java requires that the file name matches the class name. To end the facility, you simply need an `end Hello_Resolve;` statement, as shown in line 14. And, needless to say, all statements end with a semicolon, like so many other programming languages.

### 1.3.2 File Inclusions
Line 2 of the program states that the program uses `Std_Char_Str_Fac`, which is the built-in facility that allows RESOLVE to handle a specific data type, a character string in this case. This facility contains the `Char_Str` (character string) definition and operations that you can perform on the strings. This is somewhat similar to other programming languages where you have to include header files. You will see more of this later.

### 1.3.3 Operation Main
Line 3 declares `Operation Main`. This is the main program that does all the work for you. Line 13 contains the statement indicating the end of `Main`. `Operation Main` has a procedure that contains variable declarations and statements. The procedure does not need a closing end statement. The procedure declares several variables of type `Char_Str` – character string. The syntax for variable declaration is simple:

{% highlight_resolve_block %}
Var varname: <Vartype>;
{% endhighlight_resolve_block %}

You can either declare one variable per line as we did in this example, or several at once, using the keyword `Var` as in the example below :

{% highlight_resolve_block %}
Var One, Two: Char_Str;
Var Temp, Temp2: Integer;
{% endhighlight_resolve_block %}

Lines 7 and 8 initialize two variables of type character string. As in Java, RESOLVE strings use double quotes.

### 1.3.4 Assignment Symbol
An assignment symbol in RESOLVE is a colon followed by an equal sign `:=`. An equal sign alone, as in mathematics, symbolizes equality, not assignment in RESOLVE. You saw the assignment operator on lines 7 and 8 where character variables are initialized. Similarly, if you saw `my_int := 5`; this is an initialization, and if you see `my_int = 5`; this is a check for equality. Unlike in C, C++, or Java double equal sign `==` does not exist in RESOLVE.

### 1.3.5 Comments
Line 9 of the program is a comment, as indicated by a double dashed (`--`) line. This is a single line comment. If you have several lines of comments you can do one of the two things: either make several lines of single-line comments, or use a multi-line comment. A multi-line comment starts with `(*` and ends with `*)`. The two ways are illustrated below:

{% highlight_resolve_block %}
-- This is one way to write a very long comment
-- that spans several lines
{% endhighlight_resolve_block %}

{% highlight_resolve_block %}
(* Or you can use this multi-line comment which is
   similar to the C-style comment and can span
   several lines *)
{% endhighlight_resolve_block %}

### 1.3.6 Printing Output
RESOLVE has two operations for printing output to the standard output stream: `Write(...)`, and `Write_Line(...)`. The only difference is that the second one also prints a newline character. You will see more of this later, but every simple built-in type in RESOLVE (integers, booleans, characters, and character strings) has these operations. It is important to remember that these operations expect either a literal or a variable of the correct type as a parameter. If you leave the parenthesis empty the compiler will generate an error.
