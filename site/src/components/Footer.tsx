import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#474747ff", // Cor diferente do resto do site
        color: "#fff",
        padding: "30px 0",
        textAlign: "center",
        borderTop: "2px solid #ffffffff",
      }}
    >
      <p>&copy; 2025 Centenário do Silva Jardim. Todos os direitos reservados.</p>

      <div style={{ marginTop: "18px" }}>
        <strong className="led-label">Desenvolvedor Do Site</strong>
        <br />
        <span className="led-text">Gabriel Oliveira Teggi</span>
      </div>

      <div style={{ marginTop: "18px" }}>
        <strong className="led-label">Colaboradores</strong>
        <br />
        <span className="led-text">
          Vinicius Almeida De Sousa, Gustavo Divino Rodrigues Barbosa
        </span>
        <br />
        <strong className="led-label">Desenvolvedor Banco De Dados</strong>
        <br />
        <span className="led-text">Gabriel Oliveira Teggi</span>
      </div>

      <div style={{ marginTop: "18px" }}>
        <strong className="led-label">Redatores De Conteúdos</strong>
        <br />
        <span className="led-text">
          Elias Miranda Balestero, Pedro Henrique Ferreira Da Rocha, Igor
          Moreira De Araújo
        </span>
      </div>

      <style>{`
        .led-text {
          color: rgba(10, 10, 10, 1);
          background: none;
          padding: 0 6px;
          border-radius: 0;
          font-family: inherit;
          letter-spacing: 2px;
          font-weight: 700;
          display: inline-block;
          text-shadow:
            0 0 6px rgb(244, 248, 248),
            0 0 12px rgb(255, 255, 255),
            0 0 18px rgb(231, 231, 238),
            0 0 24px rgba(248, 247, 247, 1),
            0 0 32px rgb(255, 255, 255);
          box-shadow: none;
          margin: 4px 0;
          transition: color 0.2s;
        }

        .led-label {
          color: #f50505;
          text-shadow:
            0 0 8px rgb(252, 252, 252),
            0 0 16px rgb(252, 252, 252),
            0 0 24px rgb(247, 247, 248);
          font-weight: 700;
          letter-spacing: 2px;
          background: none;
          border-radius: 0;
          padding: 0 6px;
          font-family: inherit;
          display: inline-block;
          margin: 4px 0;
        }

        footer p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
