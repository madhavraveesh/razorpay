import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_ItgdT4lNqnu4Gu',
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'dev.examtyaari@gmail.com',
        contact: '8607957855',
        name: 'Developer'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function() {
          alert('dismissed')
        }
      }
    };

    var successCallback = function(payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function(error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
