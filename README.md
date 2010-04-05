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
If you don't want unregistered users to see your data, you'll want to
login into Futon as a server admin user, click on the database for
your project backlog and then click the "Security..." button. In the
popup dialog, add double-quoted values to the arrays for reader roles
or users.
