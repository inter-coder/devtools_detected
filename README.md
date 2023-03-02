# **JavaScript DevTools Blocker / Anti-Debugging Script** (devtools_detected)
<br/>
This is a JavaScript code snippet that prevents debugging tools like DevTools from being used on a website. The code will override all console functions with a simple "Sorry, for security reasons..." message and will also detect if DevTools is opened and take action accordingly.


## **How it works**
The script uses a few different techniques to prevent debugging. First, it overrides all console functions using Object.getOwnPropertyNames and Array.prototype.forEach. This prevents any logs, warnings, or errors from being output to the console.

Second, it listens for the devtools-opened and devtools-closed events on the window object to detect when DevTools is opened or closed. If DevTools is opened, the script will attempt to overwrite all window variables with a message indicating that DevTools has been detected. This will prevent any further execution of the page's code.

Finally, the script creates a function verifyConsole that is run on an interval of 100ms. This function uses the debugger statement to pause execution of the script. If the script is paused for more than 100ms, it assumes that DevTools is open and triggers the devtools-opened event. If the script is not paused, it assumes that DevTools is closed and triggers the devtools-closed event.
## **Limitations**
This script is not foolproof and can be bypassed by experienced developers. It also makes debugging difficult for developers who may need to troubleshoot issues on the site. Additionally, some browsers may have security features that prevent the script from working as intended.
## **Installation**
To use this script, simply copy and paste the code into your website's JavaScript file or add it directly to your HTML file within a script tag. The script should be added at the top of your JavaScript file to ensure it runs before any other code.
<br/>
Or,
<ol>
    <li>Download the devtools_detected.js file and add it to your project directory.</li>
    <li>Include the following code in the < head > section of your HTML file:
    <br>
    <script type="text/javascript" src="path/to/devtools_detected.js"></script>
    </li>
    <li>Save your HTML file and open it in a browser to test if the DevTools tool is blocked.</li>
</ol>


*Note:* This script should only be used if you have a legitimate reason to protect your web application's intellectual property. It is not recommended to use this script to prevent users from debugging or inspecting web pages for educational or other non-malicious purposes.
