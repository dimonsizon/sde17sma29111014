'use strict';

angular.module('app.editor', ['ngRoute'])

.controller('EditorCtrl', ['$scope', '$http', '$rootScope', '$state', '$stateParams', 'FileUploader', '$filter', 'CaseService', 'DetailsServices',
    function ($scope, $http, $rootScope, $state, $stateParams, FileUploader, $filter, CaseService, DetailsServices) {

        var currentProduct = $state.params.productId;
        var currentProductType = $state.params.productType;

        $scope.loadProducts = function (type, findFromRoute) {
            $scope.editorLoading = true;
            switch (type) {
                case 'case':
                    CaseService.query(function (data) {
                        $scope.productList = data.products;
                        $scope.editorLoading = false;

                        if (findFromRoute) {
                            $scope.setProduct(_.find($scope.productList, { 'id': currentProduct }));
                        }
                    });
                    break;
                case 'keychain':

                    break;
                case 'mug':

                    break;
                default:

            }
        }

        if (currentProduct) {
            $scope.loadProducts(currentProductType, true); //load product for current product type
            //$scope.mockupImg = _.find(mockupsJson, { 'id': currentProduct }).url;
        } else {
            //alert('нету');
        }

        $scope.setImgToEditor = function (item) {
            $scope.selectedImg = '/uploader/uploads/' + item.file.name;
        }        

        //editor
        var img = document.getElementById("mainImg");
        var step = 10;
        
        $scope.editor = {
            init: function() {
                img.style.width = img.offsetWidth;
            },
            plus: function () {
                img.style.width = img.offsetWidth + step + 'px';
            },
            minus: function () {
                img.style.width = img.offsetWidth - step + 'px';
            },
            moveUp: function () {
                img.style.top = img.offsetTop - step + 'px';
            },
            moveDown: function () {
                img.style.top = img.offsetTop + step + 'px';
            },
            moveLeft: function () {
                img.style.left = img.offsetLeft - step + 'px';
            },
            moveRight: function () {
                img.style.left = img.offsetLeft + step + 'px';
            }
        }

        $scope.editor.init();


        /************************************/
        $scope.additionalInfo = {
            'productType': '',
            'productSecondType': ''
        };

        $scope.setProduct = function (product) {
            $scope.selectedProduct = product.name;
            $scope.editorLoading = true;

            DetailsServices.get({ gasId: product.gasId }, function (product) {
                $scope.productTypes = product.product;
                for (var i = 0; i < $scope.productTypes.length; i++) {
                    $scope.productTypes[i].color = $scope.productTypes[i].color.split(',');           //color string to array
                    $scope.productTypes[i].secondType = $scope.productTypes[i].secondType.split(','); //secondType string to array
                }

                $scope.setProductType(0); //show first product
                $scope.editorLoading = false;
            });
        }

        $scope.setProductType = function (index) {
            $scope.product = $scope.productTypes[index];
            $scope.showProductIndex = index;

            $scope.selectedType = $scope.product.filterTitle;           //selected type
            $scope.additionalInfo.productType = $scope.selectedType;    //save for cart

            $scope.selectedSecondType = $scope.product.secondType[0] || $scope.product.color[0]; //set first secomd type
            $scope.additionalInfo.productSecondType = $scope.selectedSecondType;

            $scope.mockupImg = $scope.product.mockupUrl;
        }

        $scope.setSecondType = function (index) {
            $scope.selectedSecondType = $scope.product.secondType[index] || $scope.product.color[index];           //set first secomd type
            $scope.additionalInfo.productSecondType = $scope.selectedSecondType;    //save for cart
        }
                         

        /************************************* Uploader *******************************************/

        var uploader = $scope.uploader = new FileUploader({
            url: 'uploader/upload.php'
        });

        // FILTERS
        uploader.filters.push({
            name: 'customFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS
        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            //var fileName = fileItem.file.name,
            //    extension = '.' + fileName.split('.')[fileName.split('.').length - 1],
            //    date = $filter('date')(new Date().getTime(), 'dd-MM-yy_HH-mm-ss');

            //fileItem.file.name = date + extension;
            fileItem.upload(); //auto upload after additing            

            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            if (!$scope.selectedImg) {
                $scope.setImgToEditor(fileItem); //add first img to editor
            }

            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);

        // -------------------------------

        var controller = $scope.controller = {
            isImage: function (item) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };


        /*****************************Create and upload canvas**********************************/

        $scope.createCanvas = function () {
            html2canvas($('.editor-container'), {
                onrendered: function (canvas) {
                    document.getElementById('canvasRes').appendChild(canvas);

                    $scope.uploadCanvas();
                }//,
                //width: 300,
                //height: 300
            });
        }

        $scope.uploadCanvas = function () {
            var canvas = $("#canvasRes canvas")[0];
            var canvasData = canvas.toDataURL('image/jpeg');
            var ajax = new XMLHttpRequest();
            ajax.onload = function () {
                $scope.product.canvasImg = '/uploader/uploads/canvas-editor/' + JSON.parse(this.response).file;
            }
            ajax.open("POST", '/uploader/upload-canvas.php', false);
            ajax.setRequestHeader('Content-Type', 'application/upload');
            ajax.send(canvasData);
            
        }

    }]);