/*
 	Copyright (c) 2011 Alan Chandler
    This file is part of Coordinator.

    Coordinator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Coordinator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Coordinator(file COPYING.txt).  If not, 
    see <http://www.gnu.org/licenses/>.

*/

var Coordinator = new Class({
    initialize: function(activities,callback) { //an array of activity names
        this.activities = new Hash();
        activities.each(function(activity) {
            this.activities.set(activity,false);
        }.bind(this));
        this.callback = callback;
    },
    done: function(activity,parameters) {
        this.activities.set(activity,parameters);
        if (this.activities.every(function(activity) {
            return activity;
            })) this.callback(this.activities);
    }
});

