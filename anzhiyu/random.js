var posts=["StudyNotes/Cryptography-Notebook-密碼學任督二脈/","LifeAndTalk/Reading-List/","LifeAndTalk/2024-Summer-Intensive-Training-Plan/","CyberSec/CTF/2024-AIS3-Pre-exam-Writeup/","LifeAndTalk/Why-Do-I-Start-Blogging/","CyberSec/PicoCTF/All-in-One PicoCTF-Writeups/","CyberSec/CTF/SCIST-S4-資訊安全期末考-Writeup/","DevCorner/AI/2024-GDSC-NCKU-AI-Team/","DevCorner/Web/不懂就問！如何利用-Hexo-GitHub-HackMD-搭建自己的個人部落格/","TechStreak30/2024 CTF Training/Day-01-Grinding-PicoCTF/","TechStreak30/2024 CTF Training/Day-02-Learning-Cryptography/","TechStreak30/2024 CTF Training/Day-03-Learning-Cryptography-2/","TechStreak30/2024 CTF Training/Day-05-Grinding-PicoCTF-3/","TechStreak30/2024 CTF Training/Day-04-Grinding-PicoCTF-2/","TechStreak30/2024 CTF Training/Day-06-Grinding-PicoCTF-4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };