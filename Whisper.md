---
draft: true
---
Local voice transcription.

The way that the *Whisper* model works seems to be that real-time transcriptions are inæffective, so I shouldn’t bother looking for it. To achieve transcriptions practical for real-time communication, voice activity detection should be used to identify speech from silence.

*Whisper* tends to hallucinate phrases when given insufficient data, silence or short phrases. This includes:

- “Thank you” or “Thanks for watching”.
- “Sorry”.
- Subtitle attribution, usually includes a domain name.

Post-processing tends to be necessary for short speech.

## Stream avatar

I have ideas of using it for a stream/live camera avatar of sorts “*[[Sheep Zhing]]*.”. Speech-to-text-to-speech, essentially. This had rather humorous results but is terrible for clear communication.

- [huwprosser/web-whisper](https://github.com/huwprosser/web-whisper) - *Python* backend.
  - Model runs hot and occasionally locks up.
  - Long payloads get rejected by the server.
- Considering creating a separate *Node.js*/*Express* implementation that invokes a *Whisper* CLI tool instead.
  For [*whisper.cpp*](https://github.com/ggml-org/whisper.cpp), this command might be sufficient.
  `whisper-cli.exe -m ./models/tiny.en.bin -np -nt speech.wav -sns`
