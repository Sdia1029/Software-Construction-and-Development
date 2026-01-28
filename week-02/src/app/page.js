import Image from "next/image";

export default function Home() {
  return (
    <div align="center">

      {/* Main Container */}
      <div style={{ width: "70%", background: "red" }}>

        {/* Header */}
        <div>
          <Image
            src="/Task-02-image.jpeg"
            alt="Header"
            width={1200}
            height={100}
            style={{ display: "block", width: "100%", height: "100px" }}
          />
        </div>

        {/* Navigation */}
        <div style={{ background: "black", height: "45px" }}>
          <br />
          <table align="center">
            <tbody>
              <tr>
                <td><font color="white"><b>Home</b></font></td>
                <td width="70"></td>
                <td><font color="white"><b>About Us</b></font></td>
                <td width="70"></td>
                <td><font color="white"><b>Products</b></font></td>
                <td width="70"></td>
                <td><font color="white"><b>Contact Us</b></font></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Content */}
        <div style={{ height: "450px" }}>

          {/* Left */}
          <div
            style={{
              width: "30%",
              height: "450px",
              background: "green",
              float: "left"
            }}
            align="left"
          >
            <font color="white"><b>Left</b></font>
          </div>

          {/* Right */}
          <div
            style={{
              width: "70%",
              height: "450px",
              background: "orange",
              float: "left"
            }}
            align="left"
          >
            <b>Right</b>
          </div>

          <div style={{ clear: "both" }}></div>
        </div>

        {/* Footer */}
        <div style={{ background: "blue", height: "45px" }} align="left">
          <font color="white">Footer Section</font>
        </div>

      </div>
    </div>
  );
}
