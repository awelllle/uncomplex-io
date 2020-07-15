---
title: What's an API?
date: "2020-07-15T01:07:06.284Z"
tags: ["API", "rest", "REST API", "rest api"]
---

An API (Application Programming Interface) is simply a way through which two systems connect seamlessly. There are many types of APIs that exist on different systems. Lets use Web APIs as an example. Web APIs are APIs that exist on the World Wide Web.

Suppose you built a payment gateway like <a style="color:#e79e1b" href="https://stripe.com/" target="_blank">Stripe</a> or <a style="color:#e79e1b" href="https://paystack.com/" target="_blank">Paystack</a>. You want people all over the world to be able to seamlessly process payments.

Now lets say I have a website where I sell books. I want to use your software to process payments. How do you think a typical payment session will go?

<ul>

<li>I'll send your software the card details  </li>
<li>I'll send your sofware the name of my customer, amount and currency </li>
<li>Your software will need to tell my website that the payment was successful </li>

</ul>

How would I do these? 
How would I connect my website to your software so that even while I'm asleep, I can get paid and my customers can get their books?

Would I need access to your code?

Well, you'll need to setup **API** endpoints. I'll then use the enpoints to talk to your software.

So thats the basic idea. By means of the Web APIs you setup, I and thousands of others can use your software to process payments.

