let ResumeData;

function getResumeData() {
  ResumeData = {
    infoSection : {
      name :document.querySelector('#info-name').value,
      jobTitle :document.querySelector('#info-job-title').value,
      summary :document.querySelector('#info-summary').value
    }, 
    interestAndSkill : {
      skills : document.querySelector('#skills').value,
      hobbies : document.querySelector('#hobbies').value
    }, 
    contactInfo : {
      linkedin : document.querySelector('#contact-linkedin').value,
      twitter : document.querySelector('#contact-twitter').value,
      facebook : document.querySelector('#contact-facebook').value,
      email : document.querySelector('#contact-email').value,
      phone : document.querySelector('#contact-phone').value,
      address : document.querySelector('#contact-address').value
    }, 
    experienceSection : {
      expJobTitle : document.querySelector('#experience-title').value,
      company : document.querySelector('#experience-company').value,
      fromData : document.querySelector('#experience-from').value,
      toData : document.querySelector('#experience-to').value,
      jobDesc : document.querySelector('#experience-description').value
    }
  }
}

let generateResume = document.querySelector('#generate-resume')
generateResume.addEventListener("click", () => {
  getResumeData();
  // console.log(ResumeData)
  
  let skillsData = ResumeData.interestAndSkill.skills.split(",")
  let hobbiesData = ResumeData.interestAndSkill.hobbies.split(",")

  let skillsHTML = skillsData.map(skill => `
    <div class="border p-2 rounded bg-white shadow">${skill.trim()}</div>
  `).join('');

  let hobbiesHTML = hobbiesData.map(hobby => `
    <span>${hobby.trim()}</span> <br />
  `).join('');


  let resume = `
  <div class="max-w-5xl mx-auto my-10 bg-white shadow-xl grid grid-cols-3 font-sans rounded-lg overflow-hidden">
    <!-- Sidebar -->
    <div class="bg-[#1f2937] text-white p-6 col-span-1">
      <!-- Profile Image -->
      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-white shadow-md">

      <!-- Name and Job Title -->
      <h2 class="text-2xl font-bold text-center">${ResumeData.infoSection.name}</h2>
      <p class="text-center text-sm text-gray-300">${ResumeData.infoSection.jobTitle}</p>

      <!-- Social Links -->
      <div class="flex justify-center gap-4 mt-4">
        <a href=${ResumeData.contactInfo.linkedin}><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" class="w-5 h-5" alt="LinkedIn"></a>
        <a href=${ResumeData.contactInfo.twitter}><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" class="w-5 h-5" alt="Twitter"></a>
        <a href=${ResumeData.contactInfo.facebook}><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" class="w-5 h-5" alt="Facebook"></a>
      </div>

      <!-- Contact Info -->
      <div class="mt-6 text-sm leading-relaxed">
        <h3 class="font-semibold text-lg mb-2">Contact</h3>
        <p><strong>Email:</strong> ${ResumeData.contactInfo.email}</p>
        <p><strong>Phone:</strong> ${ResumeData.contactInfo.phone}</p>
        <p><strong>Address:</strong> ${ResumeData.contactInfo.address}</p>
      </div>

      <!-- Interests -->
      <div class="mt-6">
        <h3 class="font-semibold text-lg mb-2">Interests</h3>
        <div class="flex flex-wrap gap-2 text-sm text-gray-300">
          ${hobbiesHTML}
        </div>
      </div>
    </div>

    <!-- Main Section -->
    <div class="col-span-2 p-8 bg-gray-50">
      <!-- Profile Summary -->
      <section class="mb-6">
        <h2 class="text-xl font-semibold border-b pb-1 mb-2">Profile</h2>
        <p class="text-sm text-gray-700">
          ${ResumeData.infoSection.summary}
        </p>
      </section>

      <!-- Education -->
      <section class="mb-6">
        <h2 class="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        <div class="mb-2">
          <p class="font-semibold text-sm">Stanford University (2012 - 2016)</p>
          <p class="text-sm text-gray-700">Bachelor of Science in Human-Computer Interaction</p>
        </div>
      </section>

      <!-- Experience -->
      <section class="mb-6">
        <h2 class="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        <div class="mb-4">
          <p class="font-semibold text-sm">${ResumeData.experienceSection.expJobTitle} - ${ResumeData.experienceSection.company} (${ResumeData.experienceSection.fromData} - ${ResumeData.experienceSection.toData})</p>
          <p class="text-sm text-gray-700">
            ${ResumeData.experienceSection.jobDesc}
          </p>
        </div>
      </section>

      <!-- Skills -->
      <section>
        <h2 class="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <div class="grid grid-cols-4 gap-4 text-center text-sm text-gray-700">
          ${skillsHTML}
        </div>
      </section>
    </div>
  </div>

  `;

  let resumeContainer = document.querySelector('#resume-container')

  resumeContainer.innerHTML = resume
  document.querySelector("#input-container").style.display = "none"

  // inputContainer.innerHTML += resumeContainer
})


let downloadResumeBtn = document.querySelector("#download-resume")

downloadResumeBtn.addEventListener("click", ()=>{
  var element = document.getElementById('resume-container');
  var opt = {
    margin:       1,
    filename:     'myResume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // New Promise-based usage:
  // html2pdf().set(opt).from(element).save();
  try {
  html2pdf().set(opt).from(element).save();
} catch (err) {
  console.error("PDF download failed:", err);
}


  // Old monolithic-style usage:
  // html2pdf(element, opt);
})