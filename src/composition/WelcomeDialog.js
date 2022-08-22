import FancyBorder from "./FancyBorder";

export default function WelcomeDialog() {
   return (
      <FancyBorder color="blue">
         <h1 className="Dialog-title">
            Selamat Datang
         </h1>
         <p className="Dialog-message">
            Terima kasih telah mengunjungi pesawat luar angkasa kami!
         </p>
      </FancyBorder>

   )
}