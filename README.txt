Coordinator
=================================
Alan Chandler <alan@chandlerfamily.org.uk>
v1.0, 26th February 2011

This document describes Coordinator - a Mootools Javascript Class
which can be used to coordinate multiple activities for completion.

== Introduction

When I added the extension to my chat program to support encrypted
messaging, I was faced with a problem.  During the initialisation of
the program I was starting off a number of parallel activities, each
of which would take an indeterminate amount of time to complete.  Some
of the next steps needed a range of these activities (but not
necesarily all of them) to complete before they could be initiated. I
wanted to avoid the technique of polling to see if they had finished,
but rather develop an event driven system which would start when a
previously agreed set of activities had completed.  The result is this
small file in this package called coordinator.js

coordinator.js requires the core Mootools Framework be installed

== Usage

A new coordination is created as follows

---------------------------------------------------------------------
var coordination = new
Coordinator(['event-name-1','event-name-2',...],function(activity) {
    var aParam = activity.get('event-name-1');
});
---------------------------------------------------------------------

where the function is called when all the events named by the
preceeding array of strings has completed.

To indicate that a particular event has completed, the application
calls

---------------------------------------------------------------------
coordination.done('event-name-1',resultObject);
---------------------------------------------------------------------

where resultObject is an object which can be retrieved via the
activity.get call shown for the constructor (the activity object
passed into the completion function is a Mootools Hash object with the
key the name of each activity and the value the result object from
that activity.)
 
There is no inherent restriction on the number of parallel
coordinations going on at the same time, just create a new
instantiation of the class to create one.
