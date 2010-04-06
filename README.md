Backlogger
===
A CouchApp-style application for maintaining a project backlog and
organizing work into stories and sprints.

The idea is that you'll use one database per project backlog. If
you need another project backlog, then push the design document to
another database.

Pre-requisites
---
A CouchDB 0.11 server and recent version of CouchApp for your
development environment.

Securing Access
---
BackLogger, without additional configuration, allow only users logged
into the server to change data, however anyone can do reads.

If you don't want unregistered users to see your data, you'll want to
us Futon to lock-down your sprint backlog database:
* login into Futon as a server admin user
* open up your sprint backlog database
* click the "Security..." button
* add double-quoted values to the arrays for reader roles or users

After doing this, anonymous user wont be able to see BackLogger, so
you'll also need to push up BackLogger-Login:

http://github.com/zdzolton/backlogger-login


