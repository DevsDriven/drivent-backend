import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: "Driven.t",
        logoImageUrl: "https://files.driveneducation.com.br/images/logo-rounded.png",
        backgroundImageUrl: "linear-gradient(to right, #FA4098, #FFD77F)",
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, "days").toDate(),
      },
    });
  }

  let ticketTypes = await prisma.ticketType.findMany();
  console.log(ticketTypes)
  if(ticketTypes.length === 0) {
    await prisma.ticketType.createMany({
      data:[{
        name: "Online",
        price: 100,
        isRemote:true,
        includesHotel:false
      },{
        name: "Presencial",
        price: 250,
        isRemote: false,
        includesHotel: false
      },{
        name: "Presencial + Com Hotel",
        price: 600,
        isRemote: false,
        includesHotel: true
      }]
    });
  }

  let hotels = await prisma.hotel.findMany();
  console.log(hotels)
  if(hotels.length === 0) {
    await prisma.hotel.createMany({
      data:[{
        name: "Driven Resort",
        image: "https://viagemeturismo.abril.com.br/wp-content/uploads/2015/12/188153847.jpg?quality=70&strip=info&w=1024&resize=1200,800"
      },{
        name: "Driven Palace",
        image: "https://media.staticontent.com/media/pictures/5f95008e-7a7f-4f56-b018-240bcf2cec48"
      },{
        name: "Driven Castle",
        image: "https://media.architecturaldigest.com/photos/59b93a225c17f056f0f54994/2:1/w_1200,h_600,c_limit/2LoughEskeCastleExterioratDusk.jpg"
      }]
    })
  }
  
  console.log({ event });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
