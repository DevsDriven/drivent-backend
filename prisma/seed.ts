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
        startsAt: dayjs().hour(0).toDate(),
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

  let rooms = await prisma.room.findMany();
  if(rooms.length === 0) {
    await prisma.room.createMany({
      data: [{
        name: "101",
        capacity: 2,
        hotelId: 1
      }, {
        name: "102",
        capacity: 1,
        hotelId: 1
      }, {
        name: "101",
        capacity: 1,
        hotelId: 2
      }, {
        name: "101",
        capacity: 3,
        hotelId: 3
      }
      ]
    })
  }

  let activities = await prisma.activities.findMany();
  if(activities.length === 0) {
    await prisma.activities.createMany({
      data: [{
        name: "Minecraft - montando o PC ideal",
        seats: 30,
        eventId: 1,
        startsAt: dayjs().hour(9).toDate(),
        endsAt: dayjs().hour(10).toDate()
      }, {
        name: "LoL - montando o PC ideal",
        seats: 20,
        eventId: 1,
        startsAt: dayjs().hour(11).toDate(),
        endsAt: dayjs().hour(13).toDate()
      }]
    })
  }
  
  console.log({ event });
  console.log(ticketTypes);
  console.log(hotels);
  console.log(rooms);
  console.log(activities);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
