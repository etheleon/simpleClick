#!/usr/bin/perl

my $current = `pwd`;

open    OUT, ">>", "/Users/uesu/github/simpleClick/aFile";
print   STDOUT "$current clicking\n";
print   OUT "clicked\n";
close   OUT;
