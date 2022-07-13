---
title: Access Your VPS from MacOS
hide_table_of_contents: false
---

<head>
  <title>Access your VPS to create your Node - Macintosh</title>
  <meta
    name="description"
    content="Documentation on how to access a newly created VPS (Virtual Private Server) in the Cloud from your local Macintosh system."
  />
</head>

## Access from a Macintosh

### Visual Learners

If you enjoy visual learning, you can view the following YouTube series on how to handle the creation and build out of a VPS in
various Cloud Provider settings.   Please **like** and **subscribe** so you are alerted to new videos as they are produced.

###### Access your Instance

<iframe width="100%" height="380" src="https://www.youtube.com/embed/7lhiuFtrOzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

#### Definitions table to follow along in this document

| Key Value | Value |
| --------- | ----- |
| SSH Key File | cn_node_id
| Remote IP address of our VPS | `111.111.111.111` |
| SSH Key Pair File Location | `Users/.ssh/home/netmet` |
| Local System | The system used to access our remote VPS |
| Remote System | The system (VPS) we created in the prior documentation (DO, AWS, or GCP) that we are connecting to |
| [...] | Indicates redacted text and/or information |

---

:::danger
We are `pretending` our remote location (VPS) has an external IP address of `111.111.111.111` ⬅️ do **not** use this!
:::

#### Open up a new terminal session

1. Click on the desktop to change your top menu bar to `Finder` setup.
2. Click on `Go` and choose `Utilities`
![](/img/validator_nodes/nodes-mac-utilities.png)
3. Click on `Terminal`.
![](/img/validator_nodes/nodes-mac-terminal.png)

Lets use the **SSH** command to connect to our VPS. Issue the `ssh` command, including the `-i` option to tell SSH to use our specific `identity file` (ssh key file).

We will **not** be using a standard password to access our VPS; rather, a `SSH key pair` with a `passphrase`. We created this key pair in the previous sections.

Issue these commands from your Local System to connect to the IP address of your Remote System.

:::info
You may need to remove the ~/.ssh/ from the command if you did not save your SSH keys to the .ssh hidden directory.
:::

:::danger
Different cloud providers use different default users to access your VPS for the first time.  **GCP** and **DO** use `root` while **AWS** uses `ubuntu`.   We will use `root` in our examples...  make sure to change this to `ubuntu` if you are using **AWS**, or review the documentation for the provider of your choice to determine their default username.
:::

```
ssh -i ~/.ssh/cn-node-id root@111.111.111.111
```

Enter your SSH key passphrase to access your remote node.

:::note
When you are entering in your password, the key strokes will **NOT** be shown. It may seem like you are not entering in anything. This is a security measure. Do not look at the screen as you are typing, this may help you to not make a mistake.
:::

Output will look like below

```
Enter passphrase for key '/home/netmet/.ssh/cn_node_id':
```

We should now be challenged with a **WARNING** message about the **authenticity** of our **SSH keys**. We can accept this warning because we know that we just created them.

```
$ ssh -i ~/.ssh/id_cn_node root@111.111.111.111
The authenticity of host '111.111.111.111 (111.111.111.111)' can't be established.
ED25519 key fingerprint is SHA256:rGh+b304FFJeXct7xYU000=dkfjrEskafjDDjancifO.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

Access is granted!

```
Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-89-generic x86_64)

* Documentation: https://help.ubuntu.com
* Management: https://landscape.canonical.com
* Support: https://ubuntu.com/advantage

System information as of [...]

System load: 0.34 Users logged in: 0
Usage of /: 2.1% of 154.90GB IPv4 address for eth0: 111.111.111.111
Memory usage: 5% IPv4 address for eth0: 10.17.0.6
Swap usage: 0% IPv4 address for eth1: 10.108.0.4
Processes: 157


Last login: Thu [...]
root@nodegarage:~#
```

:::note
Certain information was redacted from the output above.
:::

:::note
From the instance output above above.  `root@nodegarage` : the `nodegarage` would show as the `hostname` that you supplied during the build process, in the previous steps. You may also see a `$` instead of a `#`, this does not matter.
:::

:::info 
You should not have used `NodeGarage` as your `hostname`. However, it should not make a difference in performance or functionality.
:::

Excellent you are accessing on your remote system through your local system.
