var posts=["2024 CTF Training/Day-01-Grinding-PicoCTF/","2024 CTF Training/Day-03-Learning-Cryptography-2/","2024 CTF Training/Day-02-Learning-Cryptography/","2024 CTF Training/Day-04-Grinding-PicoCTF-2/","2024 CTF Training/Day-05-Grinding-PicoCTF-3/","2024 CTF Training/Day-06-Grinding-PicoCTF-4/","CTF/2024-AIS3-Pre-exam-Writeup/","CTF/All-in-One PicoCTF-Writeups/","CTF/SCIST-S4-資訊安全期末考-Writeup/","DevCorner/2024-GDSC-NCKU-AI-Team/","DevCorner/不懂就問！如何利用-Hexo-GitHub-HackMD-搭建自己的個人部落格/","LifeAndTalk/2024-Summer-Intensive-Training-Plan/","LifeAndTalk/Reading-List/","LifeAndTalk/Why-Do-I-Start-Blogging/","StudyNotes/Cryptography-Notebook-密碼學任督二脈/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };