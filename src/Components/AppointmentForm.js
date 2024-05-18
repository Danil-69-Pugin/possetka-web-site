import React, { useState, useEffect } from "react";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientName1, setPatientName1] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 11) {
      errors.patientNumber = "Проверьте правильность введенного номера телефона";
    }


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientName1("");
    setPatientNumber("");
    setPatientGender("default");
    setFormErrors({});

    toast.success("Форма отправлена!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">

      <div className="form-container">
        <h2 className="form-title">
          <span>Форма расчета онлайн</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <br />
          <label>
            Ширина секций:
            <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                required
            >
              <option value="default">2500 мм</option>
              <option value="male">3000 мм</option>
              <option value="private">Свой размер</option>
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientGender}</p>}
          </label>

          <br />
          <label>
            Высота секций:
            <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                required
            >
              <option value="default">1030 мм</option>
              <option value="male">1230 мм</option>
              <option value="female">1530 мм</option>
              <option value="default">1730 мм</option>
              <option value="male">2030 мм</option>
              <option value="female">2430 мм</option>
              <option value="private">Свой размер</option>
            </select>
          </label>

          <br />
          <label>
            Диаметр проволки:
            <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                required
            >
              <option value="default">4 мм</option>
              <option value="male">5 мм</option>
            </select>
          </label>

          <br />
          <label>
            Длина ограждения:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </label>

          <br />
          <label>
            Ваше имя
            <input
                type="text"
                value={patientName1}
                onChange={(e) => setPatientName1(e.target.value)}
                required
            />
            {formErrors.patientName1 && <p className="error-message">{formErrors.patientName1}</p>}
          </label>
          <br />
          <label>
            Ваш телефон
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />


          <br />
          <button type="submit" className="text-appointment-btn">
            Расчитать стоимость
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Наш менеджер скоро с Вами свяжется для уточнения детелей</p>
        </form>
      </div>


      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
