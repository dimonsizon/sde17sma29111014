'use strict';

angular.module('app.editor', ['ngRoute'])

.controller('EditorCtrl', ['$scope', '$http', '$rootScope', '$state', '$stateParams', 'FileUploader', '$filter',
    function ($scope, $http, $rootScope, $state, $stateParams, FileUploader, $filter) {

        var currentProduct = $state.params.product;

        if (currentProduct) {
            $scope.mockupImg = _.find(mockupsJson, { 'id': currentProduct }).url;
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

        $scope.productMockup = {
            "case": {
                "threeD": [
                    { "id": "iphone4", "name": "iPhone 4/4S", "url": "/images/mockups/case/3d/mockup_iphone4.png" },
                    { "id": "iphone5", "name": "iPhone 5/5S/5SE", "url": "/images/mockups/case/3d/mockup_iphone5.png"},
                    { "id": "iphone5c", "name": "iPhone 5C", "url": "/images/mockups/case/3d/mockup_iphone5c.png" },
                    { "id": "iphone6", "name": "iPhone 6/6S", "url": "/images/mockups/case/3d/mockup_iphone6.png" },
                    { "id": "iphone6plus", "name": "iPhone 6 plus", "url": "/images/mockups/case/3d/mockup_iphone6plus.png" },
                    { "id": "samsungS3", "name": "Samsung S3", "url": "/images/mockups/case/3d/mockup_samsungS3.png" },
                    { "id": "samsungS4", "name": "Samsung S4", "url": "/images/mockups/case/3d/mockup_samsungS4.png" },
                    { "id": "samsungS5", "name": "Samsung S5", "url": "/images/mockups/case/3d/mockup_samsungS5.png" },
                    { "id": "samsungS5mini", "name": "Samsung S5 mini", "url": "/images/mockups/case/3d/mockup_samsungS5mini.png" },
                ],
                "twoD": [
             
                ]
            },
            "keychain": [],
            "clocks": [],
            "mugs": [],
            "photo-frame": [],
            "photo-stone": [],
            "pillows": [],
            "puzzles": [],
            "t-shirts": []
        }

        $scope.setMackup = function (item) {
            $scope.mockupImg = item.url;
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
                },
                width: 300,
                height: 300
            });
        }

        $scope.uploadCanvas = function () {
            var canvas = $("#canvasRes canvas")[0];
            var canvasData = canvas.toDataURL('image/jpeg');
            var ajax = new XMLHttpRequest();
            ajax.open("POST", '/uploader/upload-canvas.php', false);
            ajax.setRequestHeader('Content-Type', 'application/upload');
            ajax.send(canvasData);
        }

    }]);