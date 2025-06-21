import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailDomain = email.split("@")[1];
    return emailDomain === "gmail.com" || emailDomain === "cbit.org.in";
  };

  const showAlert = (variant, message) => {
    setAlert({ variant, message });
    setTimeout(() => setAlert(null), 5000);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    if (!validateEmail(formData.email)) {
      showAlert(
        "danger",
        "Please use an email with gmail.com or cbit.org.in domain"
      );
      setIsSubmitting(false);
      return;
    }

    // Simulate email sending
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      showAlert("success", "Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      showAlert("danger", "Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: {
      backgroundSize: "200% 200%",
      animation: "gradientShift 15s ease infinite",
      display: "flex",
      justifyContent: "center", // Center horizontally
      padding: "24px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: "100vh", // Keep full height for background effect
    },
    mainWrapper: {
      width: "100%",
      maxWidth: "500px",
    },
    header: {
      textAlign: "center",
      marginBottom: "28px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#fff",
      background: "none",
      backgroundClip: "unset",
      WebkitBackgroundClip: "unset",
      marginBottom: "8px",
      textShadow: "0 0 10px rgba(102, 126, 234, 0.2)",
    },
    subtitle: {
      color: "white",
      fontSize: "1rem",
      fontWeight: "300",
    },
    alert: {
      marginBottom: "20px",
      padding: "12px 16px",
      borderRadius: "10px",
      border: "1px solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      animation: "slideIn 0.3s ease-out",
      backdropFilter: "blur(6px)",
      fontSize: "0.95rem",
    },
    alertSuccess: {
      backgroundColor: "rgba(34, 197, 94, 0.15)",
      borderColor: "#22c55e",
      color: "#4ade80",
    },
    alertDanger: {
      backgroundColor: "rgba(239, 68, 68, 0.15)",
      borderColor: "#ef4444",
      color: "#f87171",
    },
    alertClose: {
      background: "none",
      border: "none",
      color: "inherit",
      fontSize: "1.2rem",
      cursor: "pointer",
      padding: "0",
      marginLeft: "10px",
    },
    formContainer: {
      background: "#22223b", // Changed from violet gradient to dark for contrast with white
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "0.95rem",
      fontWeight: "500",
      color: "#ffffff",
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "white",
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s ease",
    },
    textarea: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.12)",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
      fontSize: "1rem",
      minHeight: "120px",
      resize: "vertical",
      outline: "none",
      transition: "all 0.3s ease",
      fontFamily: "inherit",
    },
    hint: {
      fontSize: "0.8rem",
      color: "#9ca3af",
      marginTop: "6px",
    },
    button: {
      width: "100%",
      padding: "14px 24px",
      borderRadius: "10px",
      background: isSubmitting
        ? "#bbb" // Changed from violet gradient to gray when submitting
        : "#3399ff", // Changed from violet gradient to white
      border: "none",
      color: "#22223b", // Button text color to dark for contrast
      fontSize: "1rem",
      fontWeight: "600",
      cursor: isSubmitting ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px -2px rgba(102, 126, 234, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
    },
    spinner: {
      width: "16px",
      height: "16px",
      border: "2px solid rgba(34, 34, 59, 0.2)",
      borderTop: "2px solid #22223b",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginRight: "8px",
    },
    footer: {
      textAlign: "center",
      marginTop: "20px",
      color: "#9ca3af",
      fontSize: "0.85rem",
    },
  };

  const cssAnimations = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    input:focus, textarea:focus {
      border-color: #fff !important;
      box-shadow: 0 0 0 3px rgba(255,255,255,0.2) !important;
      background: rgba(255,255,255,0.18) !important;
    }
    input::placeholder, textarea::placeholder {
      color: #e5e5e5 !important;
      opacity: 0.7 !important;
    }
    button:hover:not(:disabled) {
      background: #f3f3f3 !important;
      color: #22223b !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 6px 20px -2px rgba(102, 126, 234, 0.1) !important;
    }
    @media (max-width: 480px) {
      .main-wrapper {
        padding: 16px !important;
      }
      .title {
        font-size: 1.8rem !important;
      }
      .form-container {
        padding: 20px !important;
      }
      input, textarea {
        padding: 14px !important;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssAnimations }} />
      <div style={styles.container}>
        <div style={styles.mainWrapper} className="main-wrapper">
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title} className="title">
              Contact Us
            </h1>
            <p style={styles.subtitle}>
              We'd love to hear from you. Send us a message!
            </p>
          </div>

          {/* Alert */}
          {alert && (
            <div
              style={{
                ...styles.alert,
                ...(alert.variant === "success"
                  ? styles.alertSuccess
                  : styles.alertDanger),
              }}
            >
              <span>{alert.message}</span>
              <button
                style={styles.alertClose}
                onClick={() => setAlert(null)}
              >
                ×
              </button>
            </div>
          )}

          {/* Form Container */}
          <div style={styles.formContainer} className="form-container">
            {/* Name Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                style={styles.input}
              />
            </div>

            {/* Email Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@domain.com"
                required
                style={styles.input}
              />
              <p style={styles.hint}>
                Please use gmail.com or cbit.org.in email domains
              </p>
            </div>

            {/* Message Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                required
                style={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={styles.button}
            >
              {isSubmitting ? (
                <>
                  <div style={styles.spinner}></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          {/* Footer */}
        </div>
      </div>
    </>
  );
};

export default ContactForm;