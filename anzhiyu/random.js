var posts=["LifeAndTalk/2024-Summer-Intensive-Training-Plan/","LifeAndTalk/Why-Do-I-Start-Blogging/","LifeAndTalk/Reading-List/","StudyNotes/Cryptography-Notebook-密碼學任督二脈/","CyberSec/CTF/2024-AIS3-Pre-exam-Writeup/","CyberSec/CTF/SCIST-S4-資訊安全期末考-Writeup/","CyberSec/PicoCTF/All-in-One PicoCTF-Writeups/","TechStreak30/2024 CTF Training/Day-02-Learning-Cryptography/","TechStreak30/2024 CTF Training/Day-01-Grinding-PicoCTF/","TechStreak30/2024 CTF Training/Day-03-Learning-Cryptography-2/","TechStreak30/2024 CTF Training/Day-04-Grinding-PicoCTF-2/","DevCorner/AI/2024-GDSC-NCKU-AI-Team/","TechStreak30/2024 CTF Training/Day-06-Grinding-PicoCTF-4/","TechStreak30/2024 CTF Training/Day-05-Grinding-PicoCTF-3/","DevCorner/Web/不懂就問！如何利用-Hexo-GitHub-HackMD-搭建自己的個人部落格/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };