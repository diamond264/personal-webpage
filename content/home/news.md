+++
widget = "blank"
headless = true
active = true
weight = 10

title = "News"
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
[design.spacing]
  padding = ["15px", "0", "25px", "0"]
+++
<style>
    ul.news {
        font-size: 13pt;
        margin-left: 15%;
        margin-right: 15%;
        width: 70%;
    }
    li > span.tabdate {
        font-weight: bold;
        font-size: 14pt;
    }
    @media only screen and (max-width: 992px) {
        ul.news {
            font-size: 12pt;
            margin-left: 0%;
            margin-right: 0%;
            width: 100%;
        }
        li > span.tabdate {
            font-weight: bold;
            font-size: 13pt;
        }
    }
</style>

<ul class="news">
<li><span class="tabdate">Oct. 2023<span class="tab">&#9;</span>| </span> Paper accepted at ACM CHI ‘22</li>
<li><span class="tabdate">Sep. 2022<span class="tab">&#9;</span>| </span> Visiting research in <a class="text" href="https://www.ntu.edu.sg/">NTU</a>, Singapore (Advisor Prof. <a class="text" href="https://personal.ntu.edu.sg/limo/">Mo Li</a>) (by Dec. 2022)</li>
<li><span class="tabdate">Mar. 2022<span class="tab">&#9;</span>| </span> Honorable Mention at ACM CHI ‘22</li>
<li><span class="tabdate">Nov. 2021<span class="tab">&#9;</span>| </span> Paper accepted at ACM CHI ‘22</li>
<li><span class="tabdate">Mar. 2021<span class="tab">&#9;</span>| </span> Started my integrated M.S. and Ph.D. in Networking & Mobile Systems Lab</li>
<li><span class="tabdate">Mar. 2020<span class="tab">&#9;</span>| </span> Started my M.S. in Networking & Mobile Systems Lab</li>
<li><span class="tabdate">Feb. 2020<span class="tab">&#9;</span>| </span> Graduated from KAIST as B.S. (Cum Laude)</li>
</ul>
