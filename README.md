# <h1>Discord Bot</h1>
This is code for Your Only Friend#xxxx by Oscar Hurst (some code may be edited by others and the original code is stolen *cough* *cough* borrowed from https://discordjs.guide/) and if you want to use this code you may want to edit the package.json file.

>Before continuing you must install Node.js to your PC. Link here: https://nodejs.org/en/download/

# <h2>Bot Setup (Local)</h2>

<ol>

<li>Make a file named "process.json" (without the quotes) under the file "src"</li>

<br>

<li>Un-comment line 6 in index.js (also located in "src")</li>

<br>

<li>Add this code to the "process.json" file:</li>

```
{
	"env":
	{
		"prefix": "[Your-Prefix-Here]",
		"token": "[Your-Discord-Bot-Token-Here]"
	}
}
```
</li>

<br>

<li>Open Command Prompt or Powershell and change directory to the root directory</li>

<br>

<li>Type the following into your Command Prompt or Powershell:

	npm install
</li>

<br>

<li>After creating your "process.json" file with Command Prompt or Powershell still open type:
	
	npm start
</li>

</ol>

<br>

The bot is now online

# <h2>Bot Setup (Heroku)</h2>

<ol>

<li>Ensure line 6 of index.js (located in the file named "src") is commented</li>

<br>

<li>Add code to Heroku</li>

<br>

<li>Go to settings tab on Heroku and set config vars "prefix" and "token" with your prefix and Discord bot token respectively</li>

<br>

<li>Deploy on Heroku</li>

<br>

</ol>

The bot is now online

>Note: Ensure that the **ONLY** active dyno is "worker" in the resources tab on Heroku