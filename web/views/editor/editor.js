'use strict';

angular.module('app.editor', ['ngRoute'])

.controller('EditorCtrl', ['$scope', '$http', '$rootScope', 'FileUploader', '$filter',
    function ($scope, $http, $rootScope, FileUploader, $filter) {

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
            var fileName = fileItem.file.name,
                extension = '.' + fileName.split('.')[fileName.split('.').length - 1],
                date = $filter('date')(new Date().getTime(), 'dd-MM-yy_HH-mm-ss');

            fileItem.file.name = date + extension;
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


        $scope.setImgToEditor = function (item) {
            $scope.selectedImg = '/uploader/uploads/' + item.file.name;
        }

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