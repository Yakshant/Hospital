document.getElementById("letters").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.querySelector("age")?.value || "";
    const department = document.getElementById("department").value;

    
    const doctor = document.querySelectorAll("select")[1].value;

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const reason = document.getElementById("message").value;

    
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    
    const formattedTime = new Date(`1970-01-01T${time}`).toLocaleTimeString(
        "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }
    );

    const appointmentLetter = `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f7fb;
                    padding: 40px;
                }

                .letter {
                    max-width: 800px;
                    margin: auto;
                    background: white;
                    padding: 40px;
                    border: 1px solid #ddd;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }

                h1 {
                    text-align: center;
                    color: #1976d2;
                    margin-bottom: 5px;
                }

                .hospital {
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                .date {
                    text-align: right;
                    margin-bottom: 30px;
                }

                .details {
                    margin-top: 20px;
                }

                .details p {
                    margin: 10px 0;
                }

                .message {
                    margin-top: 25px;
                    line-height: 1.6;
                }

                .footer {
                    margin-top: 50px;
                    text-align: center;
                    color: #555;
                }

                .print-btn {
                    display: block;
                    margin: 25px auto 0;
                    padding: 12px 25px;
                    background: #1976d2;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                }

                @media print {
                    body {
                        background: white;
                        padding: 0;
                    }

                    .letter {
                        box-shadow: none;
                        border: none;
                    }

                    .print-btn {
                        display: none;
                    }
                }
            </style>

            <div class="letter">

                <h1>Appointment Confirmation</h1>
                <div class="hospital">CareWell Hospital</div>

                <div class="date">
                    Date: ${new Date().toLocaleDateString("en-IN")}
                </div>

                <p>Dear <strong>${name}</strong>,</p>

                <p>
                    We are pleased to confirm your appointment with
                    <strong>CareWell Hospital</strong>.
                </p>

                <div class="details">
                    <p><strong>Patient Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Department:</strong> ${department}</p>
                    <p><strong>Doctor:</strong> ${doctor}</p>
                    <p><strong>Appointment Date:</strong> ${formattedDate}</p>
                    <p><strong>Appointment Time:</strong> ${formattedTime}</p>
                    <p><strong>Reason for Visit:</strong> ${reason || "Not specified"}</p>
                </div>

                <div class="message">
                    <p>
                        Please arrive at least 15 minutes before your scheduled
                        appointment time. Kindly bring any previous medical
                        records or relevant documents with you.
                    </p>

                    <p>
                        We look forward to providing you with the best possible care.
                    </p>
                </div>

                <div class="footer">
                    <p><strong>CareWell Hospital</strong></p>
                    <p>Thank you for choosing us.</p>
                </div>

                <button class="print-btn" onclick="window.print()">
                    Print Appointment Letter
                </button>

            </div>
    `;

    // Open appointment letter in a new tab
    const newWindow = window.open("", "_blank");

    newWindow.document.write(appointmentLetter);
    newWindow.document.close();
});