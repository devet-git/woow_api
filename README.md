## About this document
This document shows you how to use our API, created for Woow - a part-time job posting and search website

---
## Supported request methods
***GET :*** *Get resource*
***POST:*** *Send data and save resource*
***PUT:*** *Update resource*
***DELETE:*** *Delete resource*

---
## Resources
**Note**: base url is `http://localhost:8000/api/v1`
### <span style="color:red">1. User</span>

> ***GET*** <span style="font-family: monospace">/users</span>

>***POST*** <span style="font-family: monospace">/users</span>

>***GET*** <span style="font-family: monospace">/users</span>

>***PUT*** <span style="font-family: monospace">/users</span>

>***DELETE*** <span style="font-family: monospace">/users</span>

### <span style="color:red">2. Work</span>
*Same as User, following:*
>***GET*** <span style="font-family: monospace">/works</span>

>***POST*** <span style="font-family: monospace">/works</span>
{title!,desciption!,date!,time!}

>***GET*** <span style="font-family: monospace">/works/{id}</span>

>***PUT*** <span style="font-family: monospace">/works/{id}</span>
{title,desciption,date,time} ==> 1 and more of 4

>***DELETE*** <span style="font-family: monospace">/works/{id}</span>

### <span style="color:red">3. Authentication</span>
>***POST*** <span style="font-family: monospace">/auth/sign-in/phone-num</span>
{phoneNum!,pw!}

>***POST*** <span style="font-family: monospace">/auth/sign-up/phone-num</span>
{phoneNum!,pw!,repeatPw!}