---
draft: true
warning: "I mention sexual fetishes as is typical in my moderation workflow."
publish: false
---
I needed to do [[Content moderation]] on [[Bluesky]] at scale. Manually labeling images of the categories I wanted to apply labels for was going to be tedious.

Classification is a task where machine learning is used to create a neural network to classify an image into a predefined set of categories.

What I initially wanted to check if whether or not an image contained urine or urination over a set of NSFW content. This was simple, I thought. Just prepare two image folders of the desired classes and train one. Well, it's a bit more convoluted than that, really.

## Using it

The last time I checked its accuracy, it was only 30% accurate in labeling images from a subset of the network firehose. Good enough. Let's deploy it.

- [ ] #sucks: Using it

## Tips

On the false positives, I noticed that diaper porn was particularly prelevant. I didn't know this, but ABDL (Adult Baby Diaper Lover) is a pretty popular kink on *Bluesky*. When I added images containing diapers as a class to my classification model, I noticed that it had some change on the accuracy. Potentially, more image classes can improve accuracy overall.

- [ ] THESE AREN’T TIPS. Bro left in a fun fact. Fix it.

Which bathroom kinks are popular on *Bluesky*? By the number of posts labeled, this would be:

1. ABDL. Or more specifically: diapers.
2. Watersports. That's pee, by the way.
3. Scat. Feces

I am yet to label visible flatulence. Though, I'd reckon this would be lower as this specific class might be biased for fictional media, which the other categories don't have.

The resulting classification model had some biases.

- Art styles seemed to be classified at times, depending on the artist’s most relevant category.

I’ll have to see if another approach to building the training set would reduce those biases.

---

- #sucks:
  - [ ] What commands I used?
  - [ ] How did I mangled zhe [[Python]]?
    - [ ] zhere isn’t any information — it’s junst me boasting about nozhing.
    - [ ] VIRTUAL ENVIRONMENT

i zhink zhat maybe specifying fetishes is contextually relevant. might pivot to zhat instead of being vague about zhe details. Biases are a very relevant problem when fine-tuning.

okay but zhen shouldn’t [[Content moderation]] be less vague about it?
