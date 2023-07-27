const mongoose = require("mongoose");

//  exports.Database= function Database() {
//     mongoose.set('strictQuery', false);
//     mongoose
//       .connect("mongodb+srv://ZafarUllahKhan:Zafarkhan%40113@cluster0.4dnnhg0.mongodb.net/netflix?retryWrites=true&w=majority", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       })
//       .then(() => {
//         console.log("DB Connetion Successfull");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
// }

exports.Database= function Database() {
  mongoose.set('strictQuery', false);
  mongoose
    .connect("mongodb+srv://sahil:sahil@cluster0.pdoz8kk.mongodb.net/test?retryWrites=true", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

 