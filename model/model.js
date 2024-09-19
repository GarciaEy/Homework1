const homePage = `<div class="home">
        <h1>HOME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quae alias totam asperiores, odio, quia consectetur, necessitatibus
          dolor vel magni itaque ipsa ea vero architecto impedit possimus
          corporis laudantium suscipit!
        </p>
        <p>
          Eos voluptas voluptatem inventore cum, atque architecto, maxime
          recusandae dolorum numquam totam porro quas earum odio eveniet ea id
          odit fugit nihil blanditiis iure ullam voluptates. Porro aperiam vel
          harum?
        </p>
        <p>
          Facilis, earum accusantium aperiam beatae nisi dicta tempore harum
          officia expedita, ipsa iste recusandae at tempora! Dignissimos
          inventore est fuga, vel, totam labore fugit dolor laudantium minima
          aspernatur dolore dicta!
        </p>
        <p>
          Incidunt, dolorem, eius eum pariatur necessitatibus laborum deleniti,
          sed architecto veniam excepturi dicta beatae exercitationem esse
          minima. Aliquid commodi sed possimus et, blanditiis ducimus ipsa,
          tempore consequuntur veniam modi iusto.
        </p>
      </div>`;
const aboutPage = `<div class="about">
        <h1>ABOUT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quae alias totam asperiores, odio, quia consectetur, necessitatibus
          dolor vel magni itaque ipsa ea vero architecto impedit possimus
          corporis laudantium suscipit!
        </p>
        <p>
          Eos voluptas voluptatem inventore cum, atque architecto, maxime
          recusandae dolorum numquam totam porro quas earum odio eveniet ea id
          odit fugit nihil blanditiis iure ullam voluptates. Porro aperiam vel
          harum?
        </p>
        <p>
          Facilis, earum accusantium aperiam beatae nisi dicta tempore harum
          officia expedita, ipsa iste recusandae at tempora! Dignissimos
          inventore est fuga, vel, totam labore fugit dolor laudantium minima
          aspernatur dolore dicta!
        </p>
        <p>
          Incidunt, dolorem, eius eum pariatur necessitatibus laborum deleniti,
          sed architecto veniam excepturi dicta beatae exercitationem esse
          minima. Aliquid commodi sed possimus et, blanditiis ducimus ipsa,
          tempore consequuntur veniam modi iusto.
        </p>
      </div>`;
const productsPage = `<div class="products">
        <h1>PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quae alias totam asperiores, odio, quia consectetur, necessitatibus
          dolor vel magni itaque ipsa ea vero architecto impedit possimus
          corporis laudantium suscipit!
        </p>
        <p>
          Eos voluptas voluptatem inventore cum, atque architecto, maxime
          recusandae dolorum numquam totam porro quas earum odio eveniet ea id
          odit fugit nihil blanditiis iure ullam voluptates. Porro aperiam vel
          harum?
        </p>
        <p>
          Facilis, earum accusantium aperiam beatae nisi dicta tempore harum
          officia expedita, ipsa iste recusandae at tempora! Dignissimos
          inventore est fuga, vel, totam labore fugit dolor laudantium minima
          aspernatur dolore dicta!
        </p>
        <p>
          Incidunt, dolorem, eius eum pariatur necessitatibus laborum deleniti,
          sed architecto veniam excepturi dicta beatae exercitationem esse
          minima. Aliquid commodi sed possimus et, blanditiis ducimus ipsa,
          tempore consequuntur veniam modi iusto.
        </p>
      </div>`;
const contactPage = `<div class="contact">
        <h1>CONTACT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quae alias totam asperiores, odio, quia consectetur, necessitatibus
          dolor vel magni itaque ipsa ea vero architecto impedit possimus
          corporis laudantium suscipit!
        </p>
        <p>
          Eos voluptas voluptatem inventore cum, atque architecto, maxime
          recusandae dolorum numquam totam porro quas earum odio eveniet ea id
          odit fugit nihil blanditiis iure ullam voluptates. Porro aperiam vel
          harum?
        </p>
        <p>
          Facilis, earum accusantium aperiam beatae nisi dicta tempore harum
          officia expedita, ipsa iste recusandae at tempora! Dignissimos
          inventore est fuga, vel, totam labore fugit dolor laudantium minima
          aspernatur dolore dicta!
        </p>
        <p>
          Incidunt, dolorem, eius eum pariatur necessitatibus laborum deleniti,
          sed architecto veniam excepturi dicta beatae exercitationem esse
          minima. Aliquid commodi sed possimus et, blanditiis ducimus ipsa,
          tempore consequuntur veniam modi iusto.
        </p>
      </div>`;

export const fname = "Eyanla";
const lname = "Garcia";

export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  console.log(pageVarName);
  $("#app").html(eval(pageVarName));
}

export function getName() {
  return lname;
}

// export {fname, getName, }

export function getAllNames() {
  let names = ["tod", "terry", "tara", "josie"];

  //    this is one way
  //   console.log(names);

  //     this is another way: foreach loop
  //   names.forEach((name) => {
  //     console.log(name);
  //   });

  //     this is a standard for loop
  //   for (let i = 0; i < names.length; i++) {
  //     console.log(names[i]);
  //   }

  //     this is a jQuery example of looping through data
  $.each(names, (idx, name) => {
    console.log(`index ${idx} name: ${name}`);
    $("#app").append(`<p>index ${idx} name: ${name}</p>`);
  });
}
