humidor-tracker
===============

Sample application used to demonstrate the javascript tools and patterns that we use with one of our flavors of end-to-end TDD


GOALS OF THIS PRESENTATION
===============

  - expose people to the flavor & style of javascript/TDD that NaN is using
    - component-oriented
    - patterns
    - tools
    - flow


rules
===============

every REST endpoint must have end-to-end rest-spec coverage
has to be TDD all the way
has to 'work' all the way thru

stories:
===============
  - as a cigar connoisseur, I would like to record my cigar, so that I can keep a record of my purchase
    - we need type [churchill], brand [who made it], price, country of origin
  - as a cigar connoisseur, I would like to create more than one cigar item
  - as a cigar connoisseur who feels like smoking a delightful Cubano Churchill, I want to find the 'churchills' that I have previously recorded, so that I don't have to get out of my lazy boy
    - after entering type as an input, only churchills will survive
  - as a cigar connoisseur who wants to rate his/her smokes, I need a way to order them from best to worst, so that I don't have to remember every single smoke off the top of my head

