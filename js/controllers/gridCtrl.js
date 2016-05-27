'use strict'
define(['app', 'services/dataService'], function(app) {
	app.controller('gridController', ['$scope', 'getJson', function($scope, getJson) {

		$scope.data = [];
		$scope.selectedRows = [];
		var dataUrl = 'http://www.w3schools.com/angular/customers.php',
			showKendoLoading = function($el, flag) {
				kendo.ui.progress($el, flag);
			},
			getGridPageSize = function(gridDataSource) {
				return gridDataSource.pageSize();
			},
			getGridViewSize = function(gridDataSource) {
				return gridDataSource.view().length;
			},
			getGridPage = function(gridDataSource) {
				return gridDataSource.page();
			},
			changeGridPage = function(gridDataSource, pageIndex) {
				gridDataSource.fetch(function() {
					gridDataSource.page(pageIndex);
				});
			},
			initGrid = function(e) {
				//init head checkbox
				this.wrapper.find('.k-grid-header th:first')
					.empty()
					.append('<input type="checkbox" onclick="CheckAllGridRows(this);" style="cursor: pointer;">');
				if (this.dataSource.view().length > 0)
					ng.forEach(this.table.find('input[type=checkbox]'), function(value, key) {
						$el(value).attr('data-id', key + 1);
					});

				//load selected row
				ng.forEach($scope.selectedRows, function(value, key) {
					if (value.page === getGridPage(grid.data('kendoGrid').dataSource)) {
						var checkbox = $el('input[type=checkbox][data-id=' + value.index + ']');
						checkbox.closest('tr')
							.addClass('row-selected');
						checkbox.attr('checked', 'checked');
					}
				});
			}
		$scope.log = function(msg) {
			console.log(msg)
		}

		var grid = $el('.kendo-grid').kendoGrid({
			dataSource: {
				pageSize: 5,
				serverSorting: false,
				serverPaging: false,
			},
			height: '400px',
			sortable: true,
			pageable: true,
			dataBound: initGrid,
			rowTemplate: kendo.template($('#alt-template').html()),
			columns: [{
				width: '50px'
			}, {
				field: 'Name'
			}, {
				title: 'Doc',
				width: '80px'
			}, {
				field: 'City'
			}, {
				field: 'Country'
			}]
		});

		//show grid loading
		showKendoLoading(grid, true);
		//fetch grid data
		getJson(dataUrl, function(response) {
			$scope.data = response.data.records;
			setTimeout(function() {
				//bind data
				grid.data('kendoGrid').dataSource.data($scope.data);

				//hide grid loading
				showKendoLoading(grid, false);
				changeGridPage(grid.data('kendoGrid').dataSource, 2);
			}, 1000);
		})

		//regist select
		window.CheckGridRows = function(target) {
			var tr = $el(target).closest('tr'),
				arr = $scope.selectedRows,
				pg = getGridPage(grid.data('kendoGrid').dataSource),
				idx = parseInt(target.getAttribute('data-id')),
				rowInfo = {
					page: pg,
					index: idx,
					data: grid.data('kendoGrid').dataSource.view()[idx]
				},
				ContainsRow = function(row) {
					var result = false;
					ng.forEach(arr, function(value, key) {
						if (row.page === value.page &&
							row.index === value.index)
							result = true;
					});
					return result;
				},
				RemoveRow = function(row) {
					ng.forEach(arr, function(value, key) {
						row.page === value.page &&
							row.index === value.index &&
							// delete arr[key];
							arr.splice(key, 1);
					})
				};

			target.checked ?
				tr.addClass('row-selected') &&
				!ContainsRow(rowInfo) &&
				arr.push(rowInfo) :
				tr.removeClass('row-selected') &&
				ContainsRow(rowInfo) &&
				RemoveRow(rowInfo);

			setTimeout(function() {
				$el('input[type=checkbox][data-id]:checked').length ==
					// getGridPageSize(grid.data('kendoGrid').dataSource) ?
					getGridViewSize(grid.data('kendoGrid').dataSource) ?
					($el('input[type=checkbox]:first')[0].checked = true) :
					($el('input[type=checkbox]:first')[0].checked = false);
			})

			console.info(arr);
		}
		window.CheckAllGridRows = function(target) {
			var checkboxes = $el('input[type=checkbox][data-id]'),
				trs = checkboxes.closest('tr');
			ng.forEach(checkboxes, function(value) {
				value.checked = target.checked;
				CheckGridRows(value);
			})
			target.checked ?
				trs.addClass('row-selected') :
				trs.removeClass('row-selected');
		}

	}])
})
