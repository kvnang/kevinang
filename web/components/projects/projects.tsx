import { cn } from "@/lib/utils";
import { GlobeIcon, SignalHighIcon, WifiIcon } from "lucide-react";
import Image from "next/image";
import orientaleEN from "./orientale-en.jpg";
import orientaleIT from "./orientale-it.jpg";

export function MagisteriumAI(props: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      href="https://www.magisterium.com"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group px-8 py-16 flex flex-col items-center justify-center bg-zinc-950 h-full transition-colors hover:bg-zinc-800",
        props.className
      )}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-4 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 226 25"
            width="226"
            height="25"
            className="text-zinc-300 w-60 max-w-full h-auto"
          >
            <path
              fill="currentColor"
              d="M8.049 20.832a187.917 187.917 0 0 1-.985-3.236c-.32-1.145-.638-2.28-.957-3.405-.32-1.126-.61-2.177-.873-3.152-.262-.976-.487-1.82-.675-2.533-.188-.713-.319-1.22-.394-1.52l-.113.028c.057.338.104.788.141 1.351a53.445 53.445 0 0 1 .113 3.405v9.963H0V3.919h7.542c.263.994.535 2.045.816 3.152.3 1.088.591 2.176.873 3.264.3 1.07.562 2.092.787 3.068.226.956.385 1.791.479 2.504h.056c.094-.713.244-1.548.45-2.504.226-.957.479-1.98.76-3.068.282-1.088.572-2.176.873-3.264.3-1.107.572-2.158.816-3.152h7.43v17.814h-4.25V11.77a53.331 53.331 0 0 1 .112-3.405c.057-.563.104-1.013.141-1.35l-.113-.029a144.786 144.786 0 0 1-1.097 4.08c-.263.976-.554 2.027-.872 3.153-.32 1.125-.648 2.26-.985 3.405a281.046 281.046 0 0 1-.929 3.208h-4.84ZM40.67 21.648v.085h-4.785c-.13-.45-.29-.967-.478-1.548-.169-.582-.356-1.201-.563-1.858h-6.078a83.265 83.265 0 0 1-1.042 3.406H22.94v-.057L28.71 3.92h6.19l5.77 17.73ZM31.749 7.127a60.24 60.24 0 0 1-.816 3.49c-.357 1.37-.732 2.767-1.126 4.193h4.024a160.615 160.615 0 0 1-1.154-4.194 60.24 60.24 0 0 1-.816-3.49h-.112ZM54.048 16.47c0-.62.028-1.182.084-1.688l-.056-.085a21.35 21.35 0 0 1-1.717.169c-.619.019-1.19.019-1.716 0v-3.659l7.345-.028v9.569c-.863.394-1.848.703-2.955.928-1.088.207-2.477.31-4.165.31-2.251 0-4.015-.3-5.29-.9-1.277-.62-2.177-1.605-2.702-2.956-.526-1.37-.788-3.189-.788-5.46 0-1.838.206-3.348.619-4.53.431-1.182 1.05-2.092 1.857-2.73.826-.656 1.83-1.107 3.011-1.35 1.182-.263 2.533-.394 4.053-.394.9 0 1.8.037 2.701.112.92.075 1.83.216 2.73.422v3.715l-.084.056a17.263 17.263 0 0 0-2.364-.394 24.044 24.044 0 0 0-2.336-.112c-1.144 0-2.148.122-3.011.365a3.26 3.26 0 0 0-1.97 1.436c-.47.731-.704 1.867-.704 3.405 0 1.52.122 2.683.366 3.49.263.787.741 1.331 1.435 1.632.713.281 1.727.422 3.04.422h.788l1.07-.056c.356-.02.609-.047.759-.085V16.47ZM65.594 21.733H61.09V3.919h4.503v17.814ZM68.528 17.145c.826.282 1.726.507 2.702.676.994.15 1.98.225 2.955.225 1.332 0 2.317-.056 2.955-.169.656-.131 1.088-.328 1.294-.59.207-.264.31-.601.31-1.014 0-.356-.075-.638-.225-.844-.15-.207-.441-.366-.873-.479-.431-.131-1.07-.234-1.913-.31l-1.858-.168c-1.388-.131-2.486-.422-3.292-.872-.788-.45-1.351-1.051-1.689-1.801-.319-.77-.478-1.689-.478-2.758 0-1.276.253-2.308.76-3.096.525-.788 1.37-1.36 2.532-1.717 1.163-.375 2.711-.562 4.644-.562 2.514 0 4.587.328 6.219.984l-.084 3.828-.085.112a17.348 17.348 0 0 0-5.825-.985c-.976 0-1.726.057-2.251.17-.526.093-.892.252-1.098.478-.206.225-.31.544-.31.956 0 .413.066.723.197.93.15.206.441.365.873.478.431.093 1.06.187 1.885.28l1.773.198c1.501.169 2.655.469 3.462.9.806.432 1.36 1.014 1.66 1.745.319.713.478 1.586.478 2.618 0 1.256-.272 2.307-.816 3.151-.525.826-1.388 1.445-2.589 1.858-1.2.412-2.804.619-4.812.619-1.313 0-2.495-.066-3.546-.197a31.641 31.641 0 0 1-3.067-.591V17.23l.112-.085ZM89.73 21.733V7.718h-5.065v-3.8H99.3v3.8h-5.065v14.015H89.73ZM101.27 21.733V3.919h13.227v3.658h-8.724v3.377h7.57v3.659h-7.57v3.461h8.724v3.659H101.27ZM121.245 21.733h-4.502V3.919h8.499c2.232 0 3.855.506 4.868 1.52 1.032.994 1.548 2.467 1.548 4.418 0 1.463-.366 2.72-1.098 3.77-.731 1.033-1.698 1.68-2.898 1.942l-.028.085c.469.3.985.797 1.547 1.491a28.61 28.61 0 0 1 1.661 2.28c.563.807 1.06 1.566 1.491 2.28v.028h-5.234l-3.039-4.503c-.263-.394-.479-.675-.648-.844a.936.936 0 0 0-.563-.31c-.206-.038-.544-.056-1.013-.056h-.591v5.713Zm3.265-14.156h-3.265v4.784h3.265c.938 0 1.585-.187 1.942-.563.375-.375.562-.985.562-1.829s-.187-1.454-.562-1.829c-.357-.375-1.004-.563-1.942-.563ZM139.384 21.733h-4.503V3.919h4.503v17.814ZM158.19 3.919v10.497c0 1.838-.225 3.311-.675 4.418-.432 1.107-1.192 1.914-2.28 2.42-1.088.488-2.626.732-4.615.732-2.064 0-3.668-.244-4.812-.732-1.126-.506-1.914-1.313-2.364-2.42-.45-1.107-.676-2.58-.676-4.418V3.919h4.503V14.33c0 .957.094 1.707.281 2.252.188.544.526.928 1.014 1.153.487.207 1.172.31 2.054.31.825 0 1.454-.103 1.885-.31.451-.225.76-.61.929-1.153.169-.544.253-1.295.253-2.252V3.92h4.503ZM169.699 20.832a190.059 190.059 0 0 1-.985-3.236 824.27 824.27 0 0 0-.957-3.405 274.175 274.175 0 0 1-.872-3.152 392.759 392.759 0 0 1-1.069-4.053l-.113.028c.056.338.103.788.141 1.351a52.684 52.684 0 0 1 .112 3.405v9.963h-4.305V3.919h7.542c.262.994.534 2.045.816 3.152.3 1.088.591 2.176.872 3.264.3 1.07.563 2.092.788 3.068.225.956.385 1.791.479 2.504h.056a31.99 31.99 0 0 1 .45-2.504c.225-.957.479-1.98.76-3.068s.572-2.176.872-3.264c.301-1.107.573-2.158.816-3.152h7.43v17.814h-4.249V11.77a52.684 52.684 0 0 1 .112-3.405c.056-.563.103-1.013.141-1.35l-.113-.029a144.433 144.433 0 0 1-1.097 4.08c-.263.976-.554 2.027-.873 3.153-.319 1.125-.647 2.26-.985 3.405a285.59 285.59 0 0 1-.928 3.208h-4.841Z"
            />
            <path
              fill="#D3A84C"
              d="M213.089 17.388v.05h-2.84a36.132 36.132 0 0 0-.284-.919 54.7 54.7 0 0 0-.335-1.103h-3.609c-.222.78-.429 1.454-.618 2.022h-2.841v-.033l3.426-10.544h3.676l3.425 10.527Zm-5.297-8.622a35.13 35.13 0 0 1-.484 2.072c-.212.813-.435 1.643-.668 2.49h2.389a96.805 96.805 0 0 1-.685-2.49 36.064 36.064 0 0 1-.485-2.072h-.067ZM216.939 17.438h-2.674V6.861h2.674v10.577Z"
            />
            <path
              fill="#D3A84C"
              fillRule="evenodd"
              d="M222.483 1.759h-24.624c-.972 0-1.759.787-1.759 1.759v17.588c0 .972.787 1.76 1.759 1.76h24.624a1.76 1.76 0 0 0 1.759-1.76V3.518a1.76 1.76 0 0 0-1.759-1.76ZM197.859 0a3.518 3.518 0 0 0-3.518 3.518v17.588a3.518 3.518 0 0 0 3.518 3.518h24.624A3.518 3.518 0 0 0 226 21.106V3.518A3.518 3.518 0 0 0 222.483 0h-24.624Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="dark">
          <div className="text-muted-foreground max-w-sm">
            <p className="font-mono text-center text-sm">
              AI-powered search engine for 8,000+ Catholic Church documents
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex items-center justify-center">
        <div className="dark">
          <div className="text-foreground flex items-center group-hover:underline">
            <GlobeIcon className="w-4 h-4 mr-2"></GlobeIcon>
            <span>magisterium.com</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function OrientaleWeb(props: React.ComponentProps<"a">) {
  return (
    <>
      <a
        {...props}
        href="https://www.orientale.it"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group overflow-hidden flex flex-col h-full border-border border rounded-3xl",
          props.className
        )}
      >
        <div className="py-4 bg-white flex">
          <div className="px-4 basis-24 flex items-center justify-start">
            <span className="text-sm">12:00</span>
          </div>
          <div className="px-4 flex-1">
            <div className="w-full rounded-full bg-secondary h-full"></div>
          </div>
          <div className="px-4 basis-24 flex items-center justify-end">
            <SignalHighIcon className="w-5 h-5 mr-2"></SignalHighIcon>
            <WifiIcon className="w-5 h-5"></WifiIcon>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={orientaleEN}
              alt="orientale.it"
              className="w-full h-auto"
              placeholder="blur"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Image
              src={orientaleIT}
              alt="orientale.it"
              className="w-full h-auto"
              placeholder="blur"
            />
          </div>
        </div>
      </a>
    </>
  );
}
