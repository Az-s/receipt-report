const orders = [
  {
    quantity: 6,
    price: "486",
    currency: "сом",
    discount: "2.00",
    certificate: "0.40",
    withDiscount: "483.60",
    cash: "218.00",
    withoutCash: "265.00",
    cards: "249.60",
    pai: "16.00",
  },
];

const information = [
  {
    title: "Исанова",
    waiter: "Все официанты",
    start: "21 апреля 2024 00:00",
    end: "21 апреля 2024 18:30",
  },
];

const Report = () => {
  const main = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "600px",
    width: "100%", 
    margin: "0 auto", 
  };

  const blockOne = {
    boxSizing: "border-box",
    padding: "16px 32px 40px",
  };

  const titleBlock = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    borderWidth: "0px 0px 1px 0px",
  };

  const titleStyles = {
    fontFamily: "Inter-Medium, sans-serif",
    fontSize: "20px",
    fontWeight: "500",
    color: "#000",
    lineHeight: "122%",
  };

  const blocks = {
    display: "flex",
    flexDirection: "column",
  };

  const firstBlock = {
    display: "flex",
    alignItems: "flex-start",
    gap: "24px",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginBottom: "30px",
  };

  const firstBlockTitle = {
    fontFamily: "Inter-Medium, sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    color: "#000",
    lineHeight: "122%",
    textAlign: "left",
  };

  const firstBlockContent = {
    display: "flex",
    flexDirection: "column",
    width: "326px",
  };

  const firstBlockStrings = {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const firstBlockContentText = {
    fontFamily: "Inter-Bold, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
    width: "100px",
    margin: "5px 0px",
  };

  const firstBlockContentTextTwo = {
    fontFamily: "Inter-Regular, sans-serif",
    fontWeight: "400",
    fontSize: "16px",
  };

  const btn = {
    backgroundColor: "#3ab434",
    color: "#fff",
    padding: "12px 16px 12px 16px",
    borderRadius: "4px",
    border: "none",
    width: "137px",
    height: "44px",
    fontFamily: 'Montserrat-Medium", sans-serif',
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "122%",
    cursor: "pointer",
  };

  const secondBlock = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexShrink: "0",
  };
  const secondBlockFirstPart = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    flexShrink: "0",
  };
  const secondBlockSecondPart = {
    padding: "0px 0px 0px 20px",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    flexShrink: "0",
  };
  const secondBlockThirdPart = {
    padding: "0px 0px 0px 40px",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    flexShrink: "0",
  };
  const secondBlockText = {
    fontFamily: "Inter-Regular, sans-serif",
    fontWeight: "400",
    fontSize: "16px",
    margin: "10px 0px",
  };
  const secondBlockLine = {
    borderStyle: "solid",
    borderColor: "#f2f2f2",
    borderWidth: "1px 0 0 0",
    flex: "1",
    height: "0px",
  };
  const secondBlockPrice = {
    fontFamily: "Inter-Bold, sans-serif",
    fontWeight: "700",
    fontSize: "16px",
  };

  const secondBlockPriceTwo = {
    fontFamily: "Inter-Bold, sans-serif",
    fontWeight: "700",
    fontSize: "20px",
  };

  return (
    <>
      <style>
        {`
      body {
        display: flex;
        justify-content: center;
      }
      @media screen and (max-width: 600px) {
        #blockOne {
          display: block !important;
        }
      }
    `}
      </style>
      <div style={main}>
        <div style={blockOne}>
          <div style={titleBlock}>
            <h1 style={titleStyles}>Составить отчет</h1>
          </div>
          <div style={blocks}>
            <h2 style={firstBlockTitle}>Отчет за 21 апреля 2024</h2>
            <div style={firstBlock} id="blockOne">
              {information.map((info) => (
                <div key={info.title} style={firstBlockContent}>
                  <div style={firstBlockStrings}>
                    <p style={firstBlockContentText}>Заведение</p>
                    <span style={firstBlockContentTextTwo}>{info.title}</span>
                  </div>
                  <div style={firstBlockStrings}>
                    <p style={firstBlockContentText}>Официант </p>
                    <span style={firstBlockContentTextTwo}>{info.waiter}</span>
                  </div>
                  <div style={firstBlockStrings}>
                    <p style={firstBlockContentText}>Начиная с </p>
                    <span style={firstBlockContentTextTwo}>{info.start}</span>
                  </div>
                  <div style={firstBlockStrings}>
                    <p style={firstBlockContentText}>Заканчивая </p>
                    <span style={firstBlockContentTextTwo}>{info.end}</span>
                  </div>
                </div>
              ))}
              <button type="button" style={btn}>
                Распечатать
              </button>
            </div>
            <div style={secondBlock}>
              {orders.map((order) => (
                <>
                  <div style={secondBlockFirstPart}>
                    <p style={secondBlockText}>Кол-во заказов</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>{order.quantity}</span>
                  </div>
                  <div style={secondBlockFirstPart}>
                    <p style={secondBlockText}>Итого</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.price} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockSecondPart}>
                    <p style={secondBlockText}>Скидки</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.discount} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockSecondPart}>
                    <p style={secondBlockText}>Использование сертификатов</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.certificate} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockFirstPart}>
                    <p style={secondBlockText}>С учетом скидок</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPriceTwo}>
                      {order.withDiscount} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockSecondPart}>
                    <p style={secondBlockText}>Наличные оплаты</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.cash} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockSecondPart}>
                    <p style={secondBlockText}>Безналичные оплаты</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.withoutCash} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockThirdPart}>
                    <p style={secondBlockText}>Карточки</p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.cards} {order.currency}
                    </span>
                  </div>
                  <div style={secondBlockThirdPart}>
                    <p style={secondBlockText}>PAI.KG </p>
                    <p style={secondBlockLine}></p>
                    <span style={secondBlockPrice}>
                      {order.pai} {order.currency}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
