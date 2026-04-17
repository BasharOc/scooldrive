import API_BASE from "../../utils/api";

export async function createRegistration(payload) {
  const response = await fetch(`${API_BASE}/registrations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Anmeldung konnte nicht gespeichert werden");
  }

  return data;
}

export async function updateRegistrationEmailStatus({
  registrationId,
  clientUpdateToken,
  emailStatus,
  emailError = "",
}) {
  const response = await fetch(
    `${API_BASE}/registrations/${registrationId}/email-status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientUpdateToken,
        emailStatus,
        emailError,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Email-Status konnte nicht aktualisiert werden"
    );
  }

  return data;
}

