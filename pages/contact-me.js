import Header from "../components/header";
import Footer from "../components/footer";
export default function contactMe() {
    return (
        <div>
            <Header />
            <section className="container">
  <div class="grid grid-cols-1 lg:grid-cols-2 rounded-sm">
    <div className="h-44 w-auto bg-gray-400 items-center text-center">
        <label for="name">Name:</label>
        <input className="flex h-10 w-80 px-2 py-3 rounded-sm border border-green-500" type="text" placeholder="Name" id="name"
        autoComplete="off">
        </input>
    </div>

    <div className=" w-auto bg-gray-400">
    <img
          class="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9] rounded-lg"
          src="static/images/IMG_0069.png"
        />
    </div>

  </div>
</section>

            

            <Footer />
        </div>
    );
}
