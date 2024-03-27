export function OpengraphImage({
  title,
  description,
  imageData,
}: {
  title: string;
  description: string;
  imageData: ArrayBuffer;
}) {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div
        style={{
          background: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0",
          // border: "1px solid hsl(0 0% 89.8%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "0 40px",
            borderBottom: "1px solid hsl(0 0% 89.8%)",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              padding: "40px",
              borderLeft: "1px solid hsl(0 0% 89.8%)",
            }}
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.702 91.5053L145.181 39.8831C148.253 36.4719 152.008 33.7475 156.202 31.8874C160.395 30.0273 164.933 29.0732 169.518 29.0873H170.493V27H119.32V28.9976H121.47C127.642 28.9976 130.542 34.6087 126.779 39.625L66.624 114.533V43.1376C66.7321 39.4054 68.2919 35.8635 70.9703 33.2678C73.6488 30.6721 77.2338 29.2282 80.96 29.2444H83.7712V27H16V29.2444H18.8784C22.6014 29.2433 26.1775 30.7002 28.8433 33.3042C31.5092 35.9083 33.0537 39.4532 33.1472 43.1824V167.065C33.0739 170.813 31.5359 174.384 28.8637 177.009C26.1915 179.634 22.5982 181.104 18.856 181.104H16V183.348H27.0432L101.702 91.5053Z"
                fill="#3c6d84"
              />
              <path
                d="M239.742 218.9C212.213 217.497 191.806 203.189 166.562 169.937L109.71 99.2374L89.5504 123.814L118.032 158.794H60.8L56.4656 164.068H122.322L138.55 184.021C173.181 227.328 205.75 238.64 240 221.055L239.742 218.9Z"
                fill="#92bfce"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            width: "100%",
            padding: "0 40px",
            borderBottom: "1px solid hsl(0 0% 89.8%)",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "40px",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid hsl(0 0% 89.8%)",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontFamily: "Geist",
                fontSize: 64,
                lineHeight: 1.5,
                marginBottom: "16px",
                display: "block",
                lineClamp: 1,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontWeight: 400,
                fontFamily: "Geist",
                fontSize: 28,
                lineHeight: 1.5,
                maxWidth: "800px",
                display: "block",
                lineClamp: 3,
              }}
            >
              {description}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "40px 80px",
            width: "100%",
            borderTop: "1px solid hsl(0 0% 89.8%)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 80,
              height: 80,
              border: "1px solid hsl(0 0% 89.8%)",
              borderRadius: "100%",
              marginRight: "24px",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageData as any}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontWeight: 600,
                fontFamily: "Geist",
                fontSize: 24,
                marginBottom: "4px",
              }}
            >
              Kevin Ang
            </div>
            <div
              style={{
                display: "flex",
                fontWeight: 400,
                fontFamily: "Geist",
                fontSize: 18,
                color: "hsl(0 0% 45.1%)",
              }}
            >
              kevinang.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
