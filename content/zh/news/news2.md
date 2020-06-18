+++
title = "News Titile News Titile News Titile News Titile"
author = "Mikolaj Dobrucki"
media = "MEDIA"
id = "news2"
date = "2015-06-24T13:50:46+02:00"
summary = "News Titile News Titile News Titile News Titile News Titile News Titile News Titile News Titile News Titile News Titile News Titile News Titile"
+++

#### Installing openLooKeng
<br />
Download the openLooKeng server tarball, openLooKeng-server-0.235.1.tar.gz, and unpack it. The tarball will contain a single top-level directory, openLooKeng-server-0.235.1, which we will call the installation directory.

Presto needs a data directory for storing logs, etc. We recommend creating a data directory outside of the installation directory, which allows it to be easily preserved when upgrading Presto. We recommend creating a data directory outside of the installation directory, which allows it to be easily preserved when upgrading Presto.

<br />

#### Configuring openLooKeng
<br />
Create an etc directory inside the installation directory. This will hold the following configuration:

· Node Properties: environmental configuration specific to each node<br />
· JVM Config: command line options for the Java Virtual Machine<br />
· Config Properties: configuration for the Presto server<br />
· Catalog Properties: configuration for Connectors (data sources)<br /><br />

#### Node properties
<br />
The node properties file, etc/node.properties, contains configuration specific to each node. A node is a single installed instance of Presto on a machine. This file is typically created by the deployment system when Presto is first installed. The following is a minimal etc/node.properties:
<br />
<br />
<img src='../../../img/news_single/1.png' style="height:76px; width:100%">
<br />
<br />

The above properties are described below:

· node.environment: The name of the environment. All Presto nodes in a cluster must have the same environment name.<br />
· node.id: The unique identifier for this installation of Presto. This must be unique for every node. This identifier should remain consistent across reboots or upgrades of Presto. If running multiple installations of Presto on a single machine (i.e. multiple nodes on the same machine), each installation must have a unique identifier.<br />
· node.data-dir: The location (filesystem path) of the data directory. Presto will store logs and other data here.<br />
· node.data-dir: The location (filesystem path) of the data directory. Presto will store logs and other data here.<br />
· node.data-dir: The location (filesystem path) of the data directory. Presto will store logs and other data here.<br />
· node.data-dir: The location (filesystem path) of the data directory. Presto will store logs and other data here.<br /><br /><br />


#### JVM Config
<br />

The JVM config file, etc/jvm.config, contains a list of command line options used for launching the Java Virtual Machine. The format of the file is a list of options, one per line. These options are not interpreted by the shell, so options containing spaces or other special characters should not be quoted.<br />

The following provides a good starting point for creating etc/jvm.config:
<br />
<br />
<img src='../../../img/news_single/2.png' style="height:170px; width:100%">

Because an OutOfMemoryError will typically leave the JVM in an inconsistent state, we write a heap dump (for debugging) and forcibly terminate the process when this occurs.
<br />
<br />
<br />
<br />
<br />
<br />
<br />