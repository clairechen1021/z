+++
title = "SIG"
+++

# How to Join a SIG?  

### 1.Send an application email to your target SIG  

Fork gitee.com/openeuler/community to you gitee.  
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  

### 2.Send an application email to your target SIG  

Fork gitee.com/openeuler/community to you gitee.  
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  

### 3.Send an application email to your target SIG  

Fork gitee.com/openeuler/community to you gitee.  
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  


# How to Create a new SIG?  

### 1.Copy the SIG group templage and name it 

Fork gitee.com/openeuler/community to you gitee.  
git clone https://gitee.com/YOURGITEE/community  
cd ./community/sig  
cp -r sig-template sig-YOURSIGNAME  
cd sig-YOURSIGNAME  

### 2.Fill the infomation for the new SIG    

Please refer to Recommendations and Requirements to complete the application for the new SIG  
mv sig-template_cn.md sig-YOURSIGNAME_cn.md  
mv sig-template.md sig-YOURSIGNAME.md  
vi sig-YOURSIGNAME_cn.md  
vi sig-YOURSIGNAME.md  

### 3.Assgn menbers for your SIG  

Edit the fileOWNERS to finish the add memebers.    
vi OWNERS  

### 4.Configure repositories which the SIG maintain    

In openEuler Community there are 2 repositories;  
Code Source to store the source code of software.  
Packge Source to store the software packges used to build the operatig system.  
vi ../../repository/src-openeuler.yaml  
\# or / and  
vi ../../ repository/openeuler.yaml  

### 5.Add the description for your new SIG in sigs.yaml  
vi ../sigs.yaml  

\- name: sig-YOURSIGNAME  
  repositorise:  
  \-openeuler/aaa  
  \-src-oeneuler/bbb  

### 6.Create a new Pull Request  
Create a Pull Request in Gitee.  

### 7.Send an application email to Techincal Comnittee  
Send  an application email to Technical Committee(tc@openeuler.org) with the title starting with [New SIG].  
