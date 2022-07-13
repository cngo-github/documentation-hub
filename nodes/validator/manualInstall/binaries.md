---
title: Install Tessellation Binaries
hide_table_of_contents: false
---

<head>
  <title>Install Tessellation Binaries</title>
  <meta
    name="description"
    content="This document will help to install the necessary Tessellation binaries necessary to turn a VPS into a Node."
  />
</head>

We are now ready to install **Tessellation** on our VPS instance which will turn it into a **Constellation Tessellation** **` Validator NODE`**!

These are assumptions made during the step-by-step below, you will need to change these to match your configuration, if you decide to **change** anything we that suggested in this documentation.

| Variable |	Value |
| -------- | ------ |
| Cloud instance hostname |	**node-garage**. Your instance will **not** have the same hostname. Substitute `node-garage` with whatever your instance has been called during setup |
| User we will work with or add |	**nodeadmin** |
| [...] | When you see this in our examples, it will mean that there may be extra output from a command issued. The output is not important for our purposes, so it is redacted. The symbol will be shown above the code that is important or below the code that is important. |

#### INSTRUCTIONS
From your **local system**, log into your **cloud instance's** terminal as **nodeadmin** using your Apple terminal, Window's PuTTY, or your terminal application of choice.

:::note
You can remind yourself how to access your VPS here for [Macintosh](../accessMac) or [Windows](../accessWin).
:::

Bring our Node up to date

```
sudo apt -y update && sudo apt -y upgrade
```

You will be prompted for your nodeadmin password.
:::warning
Your screen will not react and your password will not show as you type.  
**Reminder**: `[...]` in the output command examples means that there is a bunch of output that has been redacted to eliminate confusion. 
:::
```
[sudo] password for nodeadmin:
[...]
```

:::danger
MAKE SURE YOU USE THE **CORRECT** VERSION!  
Installing an older or incorrect version could lead to unexpected results.
:::

:::info 
As you might expect, this documentation may get outdated quickly; however, we will do our best to keep our documentation up with the releases.
:::

We can now pull down the latest release `v0.10.0` from Constellation Network's repository.
:::note
The `sudo` will ask for a password on the first attempt.
:::

Download the **cl-keytool.jar**.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-keytool.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-keytool.jar
```
Download the **cl-node.jar**.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-node.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-node.jar
```
Download the **cl-wallet.jar**.
```
sudo wget https://github.com/Constellation-Labs/tessellation/releases/download/v0.10.0/cl-wallet.jar -P /var/tessellation; sudo chmod +x /var/tessellation/cl-wallet.jar
```

Let's verify that our files are in place. Depending on your terminal application, the files should appear in GREEN. Make sure they are executable:  `-rwxr-xr-x`

:::info 
The 2 `l` are the letter L not the number #1 (ls -l)
:::

```
ls -l /var/tessellation
```

Output should look similar (*but not exactly*) to the 👇 .

```
total 140568
-rwxr-xr-x 1 root root 52517826 Feb 28 13:19 cl-keytool.jar
-rwxr-xr-x 1 root root 91422359 Feb 28 13:19 cl-node.jar
-rwxr-xr-x 1 root root 75646006 Feb 28 16:24 cl-wallet.jar
```
That is all we need.

We are ready to **create** or **transfer** our **`P12`** file.